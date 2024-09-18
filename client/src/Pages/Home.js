import { Link } from "react-router-dom"
import logo from '../logo.png'
const Home = () => {
  return (
    <div className=" flex pt-[50px] lg:pt-0 lg:items-center min-h-screen" id="headimg">
    <div className="flex justify-around items-center">

    <img src={logo} height={1000} width={500} className="logo"/>
      
      <div className="des md:w-[80%] lg:w-[40%] space-y-5  px-5 py-2 lg:px-3 rounded-md" id="txtdv">
       <p className="text-xl md:text-2xl font-semibold text-white">Manage Tournaments with us 💯</p>
       <p className=" text-md md:text-xl text-white ">Welcome to our tournament management system , where you can create all your Tournaments , manage teams , scores and leages all at one place......</p>
       
      </div>

      
    </div>
 </div>
  )
}

export default Home
