import React from 'react';
import {connect} from 'react-redux';
import {IQuestion} from '../models/IQuestion';
import {Dispatch} from 'redux';

interface IProps {
  text: string;
  options: Array<string>;
  onNext: Function;
  allQuestions: Array<IQuestion>;
  tryDispatch: Function;
}

const Question: React.FC<IProps> = ({allQuestions, text, options, onNext, tryDispatch}) => {
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

  console.log('Just checking the store: ', allQuestions);
  tryDispatch();

  return (
    <div>
      <h1>{text}</h1>
      <ul>
        {optionalAnswers}
      </ul>
    </div>
  );
};


const mapStateToProps = (state: any) => ({
  allQuestions: state.questions
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  tryDispatch: () => dispatch({type: 'ADVANCE_CORRECT'})
});


export default connect(mapStateToProps, mapDispatchToProps)(Question);