import React from 'react';
import {connect} from 'react-redux';
import {IQuestion} from '../models/IQuestion';
import {Dispatch} from 'redux';

interface IProps {
  text: string;
  options: Array<string>;
  correctIndex: number;
  onNext: Function;
}

const Question: React.FC<IProps> = ({text, options, correctIndex, onNext}) => {
  function onClick(answerIndex: number) {
    onNext(answerIndex, correctIndex);
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
      <h1>{text}</h1>
      <ul>
        {optionalAnswers}
      </ul>
    </div>
  );
};


const mapStateToProps = (state: any) => {
  const question: IQuestion = state.questions[state.pageView.activeQuestion];
  return {
    text: question.text,
    options: question.options,
    correctIndex: question.correctIndex
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (answerIndex:number, correctIndex:number) => {
    if(answerIndex === correctIndex) {
      dispatch({type: 'ADVANCE_WRONG'});
    } else {
      dispatch({type: 'ADVANCE_CORRECT'});
    }
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Question);