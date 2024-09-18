import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import logo from '../logo.png'

const Footer = () => {
  return (
    <div className="footer py-6 px-4 bg-[#B59410] flex flex-col lg:flex-row gap-5 xl:gap-0 lg:justify-around items-center ">
    <div id="logo" className="flex flex-col items-center text-center gap-3 pb-5">
      <div className="flex gap-1 items-center">
     <IoGameController className="text-3xl text-[#800000]"/>
      <h1 className="text-xl text-white">ICTMS</h1>
      </div>
      
      <p className="text-white text-sm w-[55%] font-thin">Inter-college tournament management system.</p>
    </div>

    <div className="text-center space-y-5">
      <p className=" text-lg lg:text-xl text-white font-light lg:pt-5">Manage your tournaments efficiently 🚀</p>
       {/* <p className="text-white"><i className="bi bi-list"></i></p>  */}
      <p className="text-white text-md">Connect with us :</p>
      <div className="flex gap-4 items-center justify-center">
        <p className="text-blue-500 hover:scale-105 cursor-pointer"><FaLinkedin/></p>
        <p className="text-white hover:scale-105 cursor-pointer"><FaGithub/></p>
        <p className="text-white hover:scale-105 cursor-pointer"><FaXTwitter/></p>
      </div>
      </div>

      <div className="flex flex-col gap-3 pb-5">
        <p className="text-white text-md">Subscribe to our NewsLetter :</p>
        <div className="flex items-center gap-2">
        <input type="text" className="rounded-xl bg-white p-2 focus:outline-none" />
        <button className="px-3 py-2 rounded-md bg-[#800000] text-white">Subscribe</button>
        </div>
        
      </div>
  </div>
  )
}

export default Footer
