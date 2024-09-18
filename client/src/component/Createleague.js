import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Createleague = () => {
  let [numofplayers, setnumofplayers] = useState(4);
  let players = new Array(numofplayers).fill('');

  const navigate = useNavigate();

  const [Data, setData] = useState({
    leagueName: "",
    Player1Name: "",
    player2Name: "",
    player3Name: "",
    player4Name: "",
    player5Name: "",
    player6Name: ""
  });

  console.log(Data);

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { leagueName, player1Name, player2Name, player3Name, player4Name, player5Name, player6Name } = Data;

    const res = await fetch("http://localhost:3025/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        leagueName, player1Name, player2Name, player3Name, player4Name, player5Name, player6Name
      })
    });

    
  };

  return (
    <>
      <div className="bg-black py-[50px] flex flex-col items-center lg:items-start lg:flex-row lg:justify-around">
        <div className="logo h-[337px] w-[337px] lg:h-[500px] lg:w-[500px] overflow-hidden rounded-xl"></div>
        <form
          className="flex flex-col gap-4 p-4 lg:w-[40%] rounded-md"
          action="/create"
          method="POST"
          onSubmit={PostData}
        >
          <h1 className="text-white text-2xl text-center">
            Create a Fixture list
          </h1>
          <p className="text-sm font-light text-white text-center">
            Enter your league details and set up your team names below to create
            a fixture list.
          </p>

          <input
            type="text"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
            placeholder="Tournament name"
            name="leagueName"
            value={Data.leagueName}
            onChange={handleChange}
          />

          <label htmlFor="types" className="text-md text-white font-thin">
            Participant Type :
          </label>
          <select
            id="ParticipantType"
            name="ParticipantType"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
          >
            <option value="Player">Player</option>
            <option value="Team">Team</option>
          </select>

          <label htmlFor="types" className="text-md text-white font-thin">
            Meetings :
          </label>
          <select
            id="Meetings"
            name="Meetings"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
          >
            <option value="once">Once Only</option>
            <option value="HomeAway">Home and away</option>
          </select>

          <label htmlFor="types" className="text-md text-white font-thin">
            Type of fixture :
          </label>
          <select
            id="TypeofFixture"
            name="TypeofFixture"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
          >
            <option value="Round">Round</option>
            <option value="day">day</option>
            <option value="week">week</option>
          </select>

          <label htmlFor="types" className="text-md text-white font-thin">
            Number of Players/Teams :
          </label>
          <select
            name="NumberofParticipants"
            id="NumberofParticipants"
            className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
            onChange={(e) => setnumofplayers(Number(e.target.value))}
          >
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>

          <h1 className="text-white text-2xl text-center">Participants</h1>

          {players.map((_, i) => (
            <input
              type="text"
              className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
              placeholder={`Player/Team ${i + 1} Name`}
              id={`player${i + 1}Name`}
              name={`player${i + 1}Name`}
              key={i}
              value={Data[`player${i + 1}Name`] || ""}
              onChange={handleChange}
            />
          ))}

          <button className="text-white py-3 rounded-md bg-blue-500 w-[30%] mx-auto">
            Create List
          </button>
        </form>
      </div>
    </>
  );
};

export default Createleague;
