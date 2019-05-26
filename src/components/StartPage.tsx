import React from 'react';

interface IProps {
  onStart: any
}

const StartPage: React.FC<IProps> = ({onStart}) => {
  return (
    <div>
      <h1>Start Page</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
};


export default StartPage;