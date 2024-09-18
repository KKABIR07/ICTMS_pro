import { useState } from 'react';
import vs from '../vs.png';
import Wincomp from './Wincomp';

const Matches = ({ team1, team2, sw, w , n }) => {
  const [Data, setData] = useState({
    leagueName: n,
    name: ''
  });

  

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { leagueName, name } = Data;

    if (!leagueName || !name) {
      window.alert('All fields are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:3025/add-winner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          leagueName,
          name
        })
      });

      const data = await res.json();
      if (res.status === 201) {
        window.alert('Insert successful');
      } else {
        console.error('Error:', data.error || 'Invalid registration');
        window.alert(data.error || 'Invalid registration');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div className="flex gap-7 items-center rounded-md bg-[#F7EF8A] p-2" id="Match">
        <p className="w-36 text-center font-bold text-black">{team1.toUpperCase()}</p>
        <img src={vs} className="h-[50px] w-[50px]" alt="vs" />
        <p className="w-36 text-center font-bold text-black">{team2.toUpperCase()}</p>
      </div>

      <div>
        <p className="text-[#F7EF8A] font-semibold">DATE : ..................</p>
        <p className="text-[#F7EF8A] font-semibold">TIME : ..................</p>
      </div>
       
       
      
      {sw && (
        <form className="flex gap-2" onSubmit={PostData}>
          <input
            type="text"
            className="rounded-md p-2 focus:outline-none text-black"
            name="name"
            onChange={handleChange}
            placeholder='enter winner'
          />
          <button className="rounded-md p-2 text-white bg-black" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Matches;
