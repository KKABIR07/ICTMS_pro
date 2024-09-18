import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import Matches from '../component/Matches';
import { Link } from 'react-router-dom';

const Editwinner = () => {
  const [fixtures, setFixtures] = useState([]);
  const [name, setName] = useState('');
  const [winnerList, setWinnerList] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const Query = queryParams.get('sval');

  const [Data, setData] = useState({
    leagueName: Query.replace(/%20/g, ' ') ,
    finalName: ''
  });

  console.log(Data)
  

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { leagueName, finalName } = Data;

    if (!leagueName || !finalName) {
      window.alert('All fields are required');
      return;
    }

    try {
      const res = await fetch(`${window.location.origin}/final-winner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          leagueName,
          finalName
        })
      });

      const data = await res.json();
      if (res.status === 201) {
        window.alert('Insert successful');
        setData({
            ...data,
            name: '', // Reset the name field
          });
      } else {
        console.error('Error:', data.error || 'Invalid registration');
        window.alert(data.error || 'Invalid registration');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fixtureRes = await Axios.get(`http://localhost:3025/fixtures?leagueName=${Query}`);
        setFixtures(fixtureRes.data[0].fixtures);
        setName(fixtureRes.data[0].name);

        // const winnerRes = await Axios.get(`http://localhost:3025/winners/${Query}`);
        // setWinnerList(winnerRes.data.winners);

        // console.log('Fetched Fixtures:', fixtureRes.data[0].fixtures);
        // console.log('Fetched Winners:', winnerRes.data.winners);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [Query]);

  const getWinnerForMatch = (round, matchIndex) => {
    if (winnerList && winnerList[round] && winnerList[round][matchIndex]) {
      console.log(`Round: ${round}, Match: ${matchIndex}, Winner: ${winnerList[round][matchIndex].name}`);
      return winnerList[round][matchIndex].name;
    }
    
    return 'TBD';
  };

  return (
    <div className="min-h-screen space-y-3" id="fixdiv">
      <h1 className="text-5xl text-white text-center pt-4">{name?.toUpperCase()}</h1>
      <div className="flex items-start justify-around py-4">
        <div className="flex flex-col gap-2">
          {fixtures.map((roundFixtures, roundIndex) => (
            <div className="border-2 rounded-md p-4 flex flex-col gap-2" key={roundIndex}>
              <>
                <p className="text-[#F7EF8A] font-semibold text-center">{`ROUND: 0${roundIndex + 1}`}</p>
                <div className="flex flex-col gap-2">
                  {roundFixtures.map((match, matchIndex) => (
                    <Matches
                      team1={match[0]}
                      team2={match[1]}
                      key={matchIndex}
                      sw={true}
                      n={name}
                      w={getWinnerForMatch(roundIndex, matchIndex)}
                    />
                  ))}
                </div>
              </>
            </div>
          ))}
        </div>
      </div>
   <div className='flex justify-center py-4'>
      <form className="flex gap-2" onSubmit={PostData} method='POST'>
          <input
            type="text"
            className="rounded-md p-2 focus:outline-none text-black"
            name="finalName"
            onChange={handleChange}
            placeholder='enter ultimate winner'
          />
          <button className="rounded-md p-2 text-white bg-black" type="submit">
            Submit
          </button>

        </form>

       
        </div>
    </div>
  );
};

export default Editwinner;
