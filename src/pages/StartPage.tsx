import React from 'react';

interface IProps {
  onStart: any
}

const StartPage: React.FC<IProps> = ({onStart}) => {
  return (
    <div>
      <h1>Start Page</h1>
      <p>Click to start the quiz</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};


export default StartPage;