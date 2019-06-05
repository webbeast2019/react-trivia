import React from 'react';
import {connect} from 'react-redux';
import {IQuestion} from '../models/IQuestion';

interface IProps {
  text: string;
  options: Array<string>;
  onNext: Function;
  allQuestions: Array<IQuestion>;
}

const Question: React.FC<IProps> = ({allQuestions, text, options, onNext}) => {
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
  allQuestions: state
});

export default connect(mapStateToProps)(Question);