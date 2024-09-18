import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Axios from 'axios';
import Matches from '../component/Matches';
import vd from '../ictms.mp4';

const Fixture = () => {
  const [fixtures, setFixtures] = useState([]);
  const [name, setName] = useState('');
  const [winnerList, setWinnerList] = useState({});

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  let query = queryParams.get('sval');

  const fetchData = async () => {
    try {
      const resFixtures = await Axios.get(`${window.location.origin}/fixtures?leagueName=${query}`);
      setFixtures(resFixtures.data[0].fixtures);
      setName(resFixtures.data[0].name);

      const resWinners = await Axios.get(`${window.location.origin}/winners?leagueName=${query}`);
      const winners = resWinners.data.winners.reduce((acc, winner) => {
        acc[winner.matchIndex] = winner.name;
        return acc;
      }, {});
      setWinnerList(winners);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const queryParams2 = new URLSearchParams({ Name: query });

  return (
    <div className='min-h-screen space-y-3' id='fixdiv'>
      <h1 className='text-5xl text-white text-center pt-4'>{name?.toUpperCase()}</h1>
      <div className='flex items-start justify-around pl-[50px] py-4'>
        <div className='flex flex-col gap-2'>
          {fixtures.map((round, roundIndex) => (
            <div className='border-2 rounded-md p-4 flex flex-col gap-2' key={roundIndex}>
              <p className='text-[#F7EF8A] font-semibold text-center'>{`ROUND: 0${roundIndex + 1}`}</p>
              <div className='flex flex-col gap-2'>
                {round.map((match, matchIndex) => {
                  const matchKey = `${roundIndex}-${matchIndex}`;
                  const winner = winnerList[matchKey] || 'TBD';
                  return (
                    <Matches
                      team1={match[0]}
                      team2={match[1]}
                      key={matchKey}
                      w={winner}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <video src={vd} autoPlay loop muted height={400} width={700} id='vd' className='rounded-md' />
      </div>
      <div className='py-3 flex justify-center'>
        <button className='rounded-md p-3 bg-black text-white'>
          <Link to={`/winners?${queryParams2.toString()}`}>View Winners</Link>
        </button>
      </div>
    </div>
  );
};

export default Fixture;
