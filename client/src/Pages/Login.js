import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    try {
      const res = await fetch(`${window.location.origin}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        window.alert("Login failed. Please check your credentials.");
      } else {
        window.alert("Login successful!");
        // Optionally, you can redirect or perform other actions after successful login
        navigate('/create league');
      }
    } catch (error) {
      console.error("Login error:", error);
      window.alert("Login failed. Please try again later.");
    }
  };

  return (
     <div className='bg-black min-h-screen flex justify-center items-center' id='login'>
    <form className='flex flex-col gap-4  p-4  w-[40%] mx-auto rounded-md' method='POST' id='login-form'>
      <h1 className='text-black text-2xl text-center font-bold'>Login</h1>
      
     

      <input type="email" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-black text-black' placeholder='email' value={user.email} onChange={handleInputs} name="email"/>
      <input type="password" id="p" className='border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-black text-black' placeholder='password'  value={user.password} onChange={handleInputs} name="password"/>

      <p className="text-black text-sm ">Don't have an account? <Link to='/reg' className="text-blue-400">Register</Link></p>
     
     

      <button className='text-white py-3 rounded-md bg-blue-600 w-[30%] mx-auto hover:bg-blue-700' onClick={loginUser}>Submit</button>
    </form>
    </div>
    
  );
}

export default Login;