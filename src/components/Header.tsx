import React from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state: any) => ({
  correct: state.scores.correctAnswers,
  wrong: state.scores.wrongAnswers,
});

export default connect(mapStateToProps)(Header);