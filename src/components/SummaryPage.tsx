import React from 'react';

interface IProps {
  onStartAgain: () => void;
}

const SummaryPage: React.FC<IProps> = ({onStartAgain}) => {
  return (
    <div>
      <h1>Summary Page</h1>
      <button onClick={onStartAgain}>Start</button>
    </div>
  );
};


export default SummaryPage;