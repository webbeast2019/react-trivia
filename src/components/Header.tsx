import React from 'react';

interface IProps {
  correct: number;
  wrong: number;
}

const Header: React.FC<IProps> = ({correct, wrong}) => {
  return (
    <div>
      <h1>My Quiz</h1>
      <p>Correct: {correct}  Wrong: {wrong}</p>
    </div>
  );
};


export default Header;