import { BsBug } from "react-icons/bs";
import { Link } from "react-router-dom";

const Err = () => {
  return (
     <div className="min-h-screen bg-black flex justify-center items-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-white text-9xl flex">4<BsBug className="text-red-500"/>4</h1>
        <p className="text-white text-lg">There's nothing you're looking for...</p>
        <button className="py-2 px-3 rounded-full bg-blue-700 text-md text-white"><Link to='/'>Back to home</Link></button>
      </div>
     </div>
  );
};

export default Err;
