import React, {useEffect, useState} from 'react';
import './App.css';
import {ActiveViewEmum} from './models/ActiveView';
import StartPage from './pages/StartPage';
import SummaryPage from './pages/SummaryPage';
import QuizPage from './pages/QuizPage';
import {IQuestion} from './models/IQuestion';

const questions: Array<IQuestion> = [
  {
    id: 'q1',
    text: 'The name of WHICH US state is thought to have been made up as the result of a hoax?',
    options: ['Iowa', 'Minnesota', 'Idaho', 'Michigan'],
    correctIndex: 2
  },
  {
    id: 'q2',
    text: 'The capital of Cuba is which of the following?',
    options: ['Guantanamo Bay', 'Tijuana', 'San Jose', 'Havana'],
    correctIndex: 3
  },
  {
    id: 'q3',
    text: 'Aside from Denmark, Danish is the official language of WHICH other country?',
    options: ['Greenland', 'Germany', 'Iceland', 'Finland'],
    correctIndex: 0
  }
];


const App: React.FC<{}> = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [activeView, setActiveView] = useState(ActiveViewEmum.start);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useEffect(() => {
    console.log('componentDidMount App');
  }, []);

  // on quiz start - reset state
  const startQuiz = () => {
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setActiveView(ActiveViewEmum.quiz);
    setActiveQuestion(0);
  };
  // on answer - update state and go to next question (or summary page)
  const nextQuestion = (answerIndex: number) => {
    const correct = answerIndex === questions[activeQuestion].correctIndex;
    const quizFinished = (activeQuestion + 1 === questions.length);

    if (correct) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setWrongAnswers(wrongAnswers + 1);
    }

    if (quizFinished) {
      setActiveView(ActiveViewEmum.summary);
    } else {
      setActiveQuestion(activeQuestion + 1)
    }
  };

  const getActiveQuestion = (): IQuestion => (questions[activeQuestion]);

  // get active page: start / quiz / summary
  const getActiveView = (): JSX.Element | undefined => {
    let view;

    switch (activeView) {
      case ActiveViewEmum.start:
        view = <StartPage onStart={startQuiz}/>;
        break;

      case ActiveViewEmum.quiz:
        const q = getActiveQuestion();
        view = <QuizPage correct={correctAnswers}
                         wrong={wrongAnswers}
                         question={q}
                         nextQuestion={nextQuestion}/>;
        break;

      case ActiveViewEmum.summary:
        view = <SummaryPage correct={correctAnswers}
                            total={questions.length}
                            onStartAgain={startQuiz}/>;

        break;
    }
    return view;
  };

  return (
    <div className="App">
      {getActiveView()}
    </div>
  );
};

export default App;
