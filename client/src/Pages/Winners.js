import React from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import { useState, useEffect } from 'react';

const Winners = () => {
  const [winnerList, setWinnerList] = useState([]);
  const [finalWinner, setFinalWinner] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let Query = queryParams.get('Name');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch winners
        const winnerRes = await Axios.get(`${window.location.origin}/winners/${Query}`);
        setWinnerList(winnerRes.data.winners);

        // Fetch final winner
        const finalWinnerRes = await Axios.get(`${window.location.origin}/final-winners/${Query}`);
        setFinalWinner(finalWinnerRes.data.finalNames[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [Query]);

  return (
    <div className='bg-[#800000] min-h-screen py-4'>
      <h1 className='text-center text-3xl py-4'>Winners of each Match (acc to the fixtures) 🎉</h1>
      <div className='flex flex-col gap-2 justify-center w-[30%] mx-auto'>
        {winnerList.map((x, i) => (
          <div key={i} className='rounded-md p-3 flex gap-2 font-semibold bg-[#F7EF8A] text-black'>
            <p>{i + 1}.</p>
            {x.name}
          </div>
        ))}
      </div>

      <div className='py-4'>
        <h1 className='text-center text-3xl py-4'>🎉 Final Winner 🎉</h1>
        {finalWinner && (
          <div className='rounded-md p-3 flex gap-2 font-semibold bg-[#F7EF8A] text-black w-[30%] mx-auto'>
            {finalWinner}
          </div>
        )}
      </div>
    </div>
  );
};

export default Winners;
