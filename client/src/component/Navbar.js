import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import vs1 from '../VS1.png'

const Navbar = () => {
      let[drop , setdrop] = useState(false)

      let sitems = [ 'Tournaments' ]
  return (
    <>
    <div className="nav flex justify-between items-center gap-7 bg-[#B59410] py-4 px-2" >
      {/* <IoGameController className="text-[#800000] text-3xl"/> */}

      <div className="flex items-center gap-1">
        <Link to='/'>
        <img src={vs1} className="h-[60px] w-[40px]"/>
        </Link>
        
        <p className="text-lg text-[#800000]">ICTMS</p>
      </div>


      <div className="flex items-center gap-7">

        <Link to='/' className="text-black font-semibold" onMouseOver={()=>setdrop(false)} >Home</Link>

        <Link to='/contact' className="text-black font-semibold" onMouseOver={()=>setdrop(false)}>Contact</Link>

        <div className="">
        <p className="flex gap-1 items-center text-black cursor-pointer font-semibold" onMouseOver={()=>setdrop(true)} onClick={()=>setdrop(!drop)}>Services
          {!drop ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </p>

        <div className={`flex flex-col  max-w-fit space-y-2 bg-[#800000] p-3 rounded-md ${drop || 'hidden' } `}  id="drop">
          {
           sitems.map((x , i) => (
           <Link to={`/${x.toLowerCase()}`} onClick={()=>setdrop(false)}><p key={i} className="text-sm text-white ">{x}</p></Link>
                            ))
                         }
        </div>

      </div>

    </div> 

    <button className="bg-[#800000] px-3 py-2 rounded-md text-white">
      <Link to='/login'>Login</Link></button>
  </div>
  
  </>
  )
}

export default Navbar
