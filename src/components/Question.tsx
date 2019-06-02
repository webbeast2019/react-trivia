import React from 'react';
import {connect} from 'react-redux';

interface IProps {
  text: string
  options: Array<string>,
  onNext: Function
  numOfQuestions: number
}

const Question: React.FC<IProps> = ({numOfQuestions, text, options, onNext}) => {
  function onClick(answerIndex: number) {
    onNext(answerIndex);
  }

  const optionalAnswers = options.map((q: string, i: number) => (
    <li key={i}>
      <label onClick={onClick.bind(null, i)}>
        <span>{q}</span>
      </label>
    </li>
  ));

  return (
    <div>
      <h1>Data from redux store: {numOfQuestions}</h1>
      <h1>{text}</h1>
      <ul>
        {optionalAnswers}
      </ul>
    </div>
  );
};


const mapStateToProps = (state: any) => {
  return {
    numOfQuestions: state.length
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onNext: (index:number) => {
      const action = {
        type: 'ADVANCE_ACTIVE_QUESTION',
        payload: index
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);