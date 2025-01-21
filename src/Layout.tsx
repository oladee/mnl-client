import { Outlet } from "react-router-dom"
// import { ContactForm, Footer, Navbar } from "./components"
import { ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
function Layout() {
  return (
    <div>
      <Header/>
      <Outlet />
      <ScrollRestoration/>
      <ToastContainer />
    </div>
  )
}

export default Layout
