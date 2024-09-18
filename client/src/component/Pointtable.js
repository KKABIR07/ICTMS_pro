import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Pointtable = () => {
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
        const res = await fetch('http://localhost:3025/pointtable', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include" // Ensure cookies are included
        });

        if (res.status === 401) {
            throw new Error('Unauthorized');
        }

        const data = await res.json();
        console.log('Data:', data);
        // Handle the received data as needed
    } catch (err) {
        console.error('Error:', err);
        navigate('/login'); // Redirect to login page if unauthorized
    }
};

useEffect(() => {
    callAboutPage();
}, []);

  return (
    <div>
      <section method="GET" className="content-info">
        <div className="container paddings-mini">
          <div className="row">
            <div className="col-lg-12">
              <table className="table-striped table-responsive table-hover result-point">
                <thead className="point-table-head">
                  <tr>
                    <th className="text-left">No</th>
                    <th className="text-left">TEAM</th>
                    <th className="text-center">P</th>
                    <th className="text-center">W</th>
                    <th className="text-center">D</th>
                    <th className="text-center">L</th>
                    <th className="text-center">GS</th>
                    <th className="text-center">GA</th>
                    <th className="text-center">+/-</th>
                    <th className="text-center">PTS</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://html.iwthemes.com/sportscup/run/img/clubs-logos/colombia.png" alt="Colombia logo"/><span>Colombia</span>
                    </td>
                    <td>38</td>
                    <td>26</td>
                    <td>9</td>
                    <td>3</td>
                    <td>73</td>
                    <td>32</td>
                    <td>+41</td>
                    <td>87</td>
                  </tr>
                  <tr>
                    <td className="text-left number">2 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/100/000000/brazil.png" alt="Brazil logo"/><span>Brazil</span>
                    </td>
                    <td>38</td>
                    <td>24</td>
                    <td>7</td>
                    <td>7</td>
                    <td>83</td>
                    <td>38</td>
                    <td>+45</td>
                    <td>79</td>
                  </tr>
                  <tr>
                    <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/argentina.png" alt="Argentina logo"/><span>Argentina</span>
                    </td>
                    <td>38</td>
                    <td>22</td>
                    <td>9</td>
                    <td>7</td>
                    <td>71</td>
                    <td>36</td>
                    <td>+35</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <td className="text-left number">4 <i className="fa fa-caret-down" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/japan.png" alt="Japan logo"/><span>Japan</span>
                    </td>
                    <td>38</td>
                    <td>20</td>
                    <td>10</td>
                    <td>8</td>
                    <td>62</td>
                    <td>37</td>
                    <td>+25</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td className="text-left number">5 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/flag.png" alt="Senegal logo"/><span>Senegal</span>
                    </td>
                    <td>38</td>
                    <td>19</td>
                    <td>7</td>
                    <td>12</td>
                    <td>58</td>
                    <td>53</td>
                    <td>+5</td>
                    <td>64</td>
                  </tr>
                  <tr>
                    <td className="text-left number">6 <i className="fa fa-caret-down" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/poland.png" alt="Poland logo"/><span>Poland</span>
                    </td>
                    <td>38</td>
                    <td>18</td>
                    <td>8</td>
                    <td>12</td>
                    <td>52</td>
                    <td>48</td>
                    <td>+4</td>
                    <td>62</td>
                  </tr>
                  <tr>
                    <td className="text-left number">7 <i className="fa fa-caret-down" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/russian-federation.png" alt="Russia logo"/><span>Russia</span>
                    </td>
                    <td>38</td>
                    <td>18</td>
                    <td>6</td>
                    <td>14</td>
                    <td>54</td>
                    <td>33</td>
                    <td>+21</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td className="text-left number">8 <i className="fa fa-caret-up" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/iran.png" alt="Iran logo"/><span>Iran</span>
                    </td>
                    <td>38</td>
                    <td>12</td>
                    <td>11</td>
                    <td>15</td>
                    <td>48</td>
                    <td>50</td>
                    <td>-2</td>
                    <td>47</td>
                  </tr>
                  <tr>
                    <td className="text-left number">9 <i className="fa fa-circle" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/spain.png" alt="Spain logo"/><span>Spain</span>
                    </td>
                    <td>38</td>
                    <td>26</td>
                    <td>9</td>
                    <td>3</td>
                    <td>73</td>
                    <td>32</td>
                    <td>+41</td>
                    <td>87</td>
                  </tr>
                  <tr>
                    <td className="text-left number">10 <i className="fa fa-circle" aria-hidden="true"></i></td>
                    <td className="text-left">
                      <img src="https://img.icons8.com/color/48/000000/france.png" alt="France logo"/><span>France</span>
                    </td>
                    <td>38</td>
                    <td>24</td>
                    <td>7</td>
                    <td>7</td>
                    <td>83</td>
                    <td>38</td>
                    <td>+45</td>
                    <td>79</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pointtable;
