import mariLogo from "../assets/mariteamLogo.svg"
const Header = () => {
  return (
    <div className="bg-[#FDFDFD] backdrop-blur-md pl-10 lg:pl-[100px] lg:py-7">
      <img src={mariLogo} alt="Mariteam logo" />
    </div>
  )
}

export default Header
