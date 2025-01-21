import { ErrorMessage, Form, Formik } from "formik"
import { useEffect, useState } from "react"
import * as Yup from "yup"
import {  useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";


const Home = () => {
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const navigate = useNavigate()
  const name = new URLSearchParams(location.search).get('name');
  const employeeid = new URLSearchParams(location.search).get('employeeid');
  const unsignedid = new URLSearchParams(location.search).get('unsignedid');

  useEffect(()=>{
    if(!name || !employeeid || !unsignedid){
      navigate('/404')
    }
  },[name,employeeid,unsignedid,navigate])
  return (<div className="bg-mariBg bg-top bg-[#F5F5FB] lg:pb-24 lg:px-[6.94vw]">
    <header className="text-center lg:pt-7 lg:pb-9  text-black-100 font-bold font-montserrat text-[1.7vw]">
    Payslip Generation
    </header>
    <Formik initialValues={{checkCondition : false}}
    validationSchema={Yup.object({
      checkCondition : Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
    })}
    onSubmit={async()=>{
      try {
        setLoading(true)
        toast.loading('Submitting', {toastId : 'submit'})
        await axios.get(`/payroll/signpayslip/${unsignedid}`)
        setTimeout(()=>{
          setLoading(false)
          toast.update('submit', {render: "Submitted Successfully, check email for your updated payslip", type: "success", isLoading: false, autoClose : 3000});
        },1000)
      } catch (error) {
        toast.error("An error occured, action not allowed")
        console.log(error)
      }
      
    }}
    >
    {
      ({setFieldValue, isValid, dirty})=>(<Form>
        <div className="bg-[#B49B12] flex items-center gap-10 justify-center lg:py-12">
          <div className="font-montserrat uppercase lg:text-[1.388vw]">
            Employee Name: <span className="text-black-Title-Text font-bold">{name ?? "NOT FOUND"}</span>
          </div>
          <div className="font-montserrat uppercase lg:text-[1.388vw]">
          Employee ID: <span className="text-black-Title-Text font-bold"> {employeeid ?? "NOT FOUND"}</span>
          </div>
        </div>
        <div className="bg-white lg:py-8  lg:px-10 font-poppins lg:text-[1.1vw]">
          <p className="lg:mb-4">
          You are on this page to download your payslip. To proceed, please review and agree to the terms below by selecting the checkbox.
          </p>
          <h5 className="font-bold text-black-Body-Text mb-2">
          By providing your consent, you:
          </h5>
          <ul className="list-disc px-4 text-black-Body-Text">
            <li>
            Confirm that you are authorized to access this payslip.
            </li>
            <li>
            Acknowledge that it is intended for your personal use only.
            </li>
            <li>
            Understand that your agreement constitutes your electronic signature.
            </li>
          </ul>
          <label htmlFor="checkCondition" className="flex items-center gap-2 font-poppins text-black-Body-Text font-normal mt-10">
            <input type="checkbox" name="checkCondition" id="checkCondition" className="w-5 h-5 cursor-pointer" onChange={(e)=>{
              setFieldValue('checkCondition', e.currentTarget.checked)
            }} />
            I have read and agree to the terms and conditions for generating and downloading my payslip.
          </label>
          <ErrorMessage name="checkCondition">
          {
            msg => <div style={{ color: 'red' }}>{msg}</div>
          }
          </ErrorMessage>
          <div className="flex justify-center">
            <button type="submit" className="bg-accent rounded py-2 px-3 w-[154px] font-poppins font-bold mt-8 disabled:bg-[#F4F4F4] disabled:cursor-not-allowed" disabled={!(isValid && dirty) || loading }>
              Submit
            </button>
          </div>
        </div>
      </Form>)
    }
    </Formik>
  </div>)
}

export default Home

