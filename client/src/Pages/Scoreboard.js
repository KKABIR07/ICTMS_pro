import React from 'react';

const Scoreboard = () => {
  return (
    <div>
        <div>

        </div>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="container" style={{ border: '1px solid black', marginTop: '80px' }}>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="text-left">
              <div className="text-center">
                <h1>4</h1>
                <h1>Team1</h1>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <h1>Game Day</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-right">
              <div className="text-center">
                <h1>3</h1>
                <h1>Team6</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
