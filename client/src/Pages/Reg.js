import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Reg = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "", email: "", phone: "", password: "", repassword: ""
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, repassword } = user;

    const res = await fetch(`${window.location.origin}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, password, repassword
      })
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Registration successful");
      console.log("Registration successful");
      navigate('/login');
    }
  };

  return (
    <div className='bg-black min-h-screen flex items-center justify-start pl-4' id='reg'>
    <form className='flex flex-col gap-4  p-4  w-[40%]  rounded-md' id='reg-form'>
      <h1 className='text-black text-2xl text-center font-mono'>Register</h1>
      
      <input type="text" id="name" className='border-2 border-slate-600  p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-black' placeholder='name' name="name" value={user.name} onChange={handleInputs}/>

      <input type="email" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-black' placeholder='email' name="email" value={user.email} onChange={handleInputs}/>

      <input type="tel" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-black' placeholder='phone' maxLength={10} name="phone" value={user.phone} onChange={handleInputs} />

    

      <input type="password" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-black' placeholder='password' name="password" value={user.password} onChange={handleInputs}/>

      <input type="password" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-black' placeholder='Confirm password' name="repassword" value={user.repassword} onChange={handleInputs}/>
      
      <p className="text-white text-sm ">Already have an account? <Link to='/login' className="text-blue-400">
        Login</Link></p>
      
     
     

      <button className='text-white py-3 rounded-md bg-blue-600 hover:bg-blue-700 w-[30%] mx-auto' onClick={PostData}>Submit</button>
    </form>
    </div>
    
  );
}

export default Reg;