import React from 'react';
import Header from '../components/Header';
import Question from '../components/Question';
import {IQuestion} from '../models/IQuestion';

interface IProps {
  correct: number
  wrong: number
  question: IQuestion
  nextQuestion: Function
}

const QuizPage: React.FC<IProps> = ({correct, wrong, question, nextQuestion}) => {
  return (
    <div>
      <Header correct={correct} wrong={wrong}/>
      <Question text={question.text}
                options={question.options}
                onNext={nextQuestion}/>
    </div>
  );
};


export default QuizPage;