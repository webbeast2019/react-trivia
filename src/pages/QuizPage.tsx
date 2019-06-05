import React from 'react';
import Header from '../components/Header';
import Question from '../components/Question';

interface IProps {
}

const QuizPage: React.FC<IProps> = () => {
  return (
    <div>
      <Header/>
      <Question/>
    </div>
  );
};


export default QuizPage;