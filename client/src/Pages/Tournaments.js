import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tournaments = () => {
  const [sval, setsval] = useState('');

  const handleChange = (e) => {
    setsval(e.target.value);
  }

  const queryParams = new URLSearchParams({ sval: sval.replace(/ /g, '%20') });
  
  return (
    <>
    {/* <h1 className="text-white py-3 text-center bg-black text-3xl">Tournaments</h1> */}
    <div className="tournament flex justify-center items-center" >
      <div className="w-[40%] flex flex-col gap-2 p-4" id="mkb">
      <h1 className="text-white  font-bold text-xl">Search for Leagues</h1>
      <div className="flex gap-1 items-center ">
         <input type="text" className="w-full p-2 focus:outline-none rounded-md bg-transparent border-2 border-blue-600 text-white" onChange={handleChange}/> 
          <Link to={`/fixture?${queryParams.toString()}`}><FaSearch className="text-green-300 text-xl"/></Link>
      </div>
       </div>
    </div>
    </>
  )
}

export default Tournaments
