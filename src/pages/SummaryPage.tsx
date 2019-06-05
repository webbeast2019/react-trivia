import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

interface IProps {
  correct: number;
  total: number;
  onStartAgain: () => void;
}

const SummaryPage: React.FC<IProps> = ({correct, total, onStartAgain}) => {
  const allCorrectMessage = ['Well Done', 'Good Job', 'Great Work'];

  function getRandomAllCorrectMessage(): string{
    return allCorrectMessage[Math.floor(Math.random() * allCorrectMessage.length)];
  }

  return (
    <div>
      <h1>Summary Page</h1>
      <p>You've answer correctly on {correct} of {total} questions. </p>
      {
        (correct === total) &&
        <p>{getRandomAllCorrectMessage()}!</p>
      }
      <button onClick={onStartAgain}>Try again</button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  correct: state.scores.correctAnswers,
  total: state.questions.length,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStartAgain: () => {
    dispatch({type:'RESET_VIEW'});
    dispatch({type:'RESET_SCORE'});
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);