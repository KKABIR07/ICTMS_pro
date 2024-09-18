import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Createleague = () => {
  const [numofplayers, setnumofplayers] = useState(6);
  let [btnstate , setbtn] = useState(true);
  const [Data, setData] = useState({
    leagueName: "",
    Player1Name: "",
    Player2Name: "",
    Player3Name: "",
    Player4Name: "",
    Player5Name: "",
    Player6Name: ""
  });

  const players = new Array(numofplayers).fill('').map((_, i) => `Player${i + 1}Name`);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { leagueName, Player1Name, Player2Name, Player3Name, Player4Name, Player5Name, Player6Name } = Data;

    if (!leagueName || !Player1Name || !Player2Name || !Player3Name || !Player4Name || !Player5Name || !Player6Name) {
      window.alert("All fields are required");
      return;
    }

    try {
      const res = await fetch(`${window.location.origin}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          leagueName, Player1Name, Player2Name, Player3Name, Player4Name, Player5Name, Player6Name
        })
      });

      const data = await res.json();
      if (res.status === 200) {
        window.alert("Insert successful , now you can select winners according");
        setbtn(false);
      } else {
        window.alert(data.error || "Invalid registration");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectWinner = (e) => {
    e.preventDefault();
    navigate('/searchleague');
  };

  return (
    <div className="bg-black py-[50px] flex flex-col items-center lg:items-start lg:flex-row lg:justify-around" id='league'>
      <form
        className="flex flex-col gap-4 p-4 lg:w-[40%] rounded-md"
        onSubmit={PostData}
        id='league-form'
      >
        <h1 className="text-white text-2xl text-center">Create a Fixture list</h1>
        <p className="text-sm font-light text-white text-center">
          Enter your league details and set up your team names below to create a fixture list.
        </p>

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-white"
          placeholder="Tournament name"
          name="leagueName"
          value={Data.leagueName}
          onChange={handleChange}
        />

        <label htmlFor="ParticipantType" className="text-md text-white font-thin">Participant Type :</label>
        <select
          id="ParticipantType"
          name="ParticipantType"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent text-white"
        >
          <option value="Player" className='text-black'>Player</option>
          <option value="Team" className='text-black'>Team</option>
        </select>

        <label htmlFor="Meetings" className="text-md text-white font-thin">Meetings :</label>
        <select
          id="Meetings"
          name="Meetings"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent text-white"
        >
          <option value="once" className='text-black'>Once Only</option>
          <option value="HomeAway" className='text-black'>Home and away</option>
        </select>

        <label htmlFor="TypeofFixture" className="text-md text-white font-thin">Type of fixture :</label>
        <select
          id="TypeofFixture"
          name="TypeofFixture"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent text-white"
        >
          <option value="Round" className='text-black'>Round</option>
          <option value="day" className='text-black'>Day</option>
          <option value="week" className='text-black'>Week</option>
        </select>

        <label htmlFor="NumberofParticipants" className="text-md text-white font-thin">Number of Players/Teams :</label>
        <select
          name="NumberofParticipants"
          id="NumberofParticipants"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent text-white"
          onChange={(e) => setnumofplayers(Number(e.target.value))}
        >
          <option value="6" className='text-black'>6</option>
          <option value="8" className='text-black'>8</option>
          <option value="10" className='text-black'>10</option>
        </select>

        <h1 className="text-white text-2xl text-center">Participants</h1>

        {players.map((playerName, i) => (
          <input
            key={i}
            type="text"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-transparent placeholder:text-white text-white"
            placeholder={`Player/Team ${i + 1} Name`}
            name={playerName}
            value={Data[playerName] || ""}
            onChange={handleChange}
          />
        ))}

        <div className='flex gap-2 justify-center'>
          <button
            type="submit"
            className="text-white py-3 rounded-md bg-blue-500 w-[30%]"
          >
            Create List
          </button>

          <button
            type="button"
            className={`text-white py-3 rounded-md bg-blue-500 w-[30%]`}
            
            onClick={handleSelectWinner}
          >
            Select Winner
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createleague;
