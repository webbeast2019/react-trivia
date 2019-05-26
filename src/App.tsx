import React from 'react';
import './App.css';
import {IQuestion} from './models/IQuestion';
import Question from './components/Question';
import StartPage from './components/StartPage';
import SummaryPage from './components/SummaryPage';

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

enum ActiveView {
  start,
  quiz,
  summary
}

interface IState {
  correctAnswers: number,
  wrongAnswers: number,
  activeView: ActiveView
  activeQuestion: number
}

const initState: IState = {
  correctAnswers: 0,
  wrongAnswers: 0,
  activeView: ActiveView.start,
  activeQuestion: 0,
};

class App extends React.Component<{}, IState> {
  constructor(props = {}) {
    super(props);

    this.state = {...initState};
  }

  componentDidMount() {
    console.log('componentDidMount App');
  }

  startQuiz = () => {
    this.setState({
      ...initState,
      activeView: ActiveView.quiz
    });
  };

  nextQuestion = (answerIndex: number) => {
    const s = this.state;
    const correctAnswer = answerIndex === questions[this.state.activeQuestion].correctIndex;
    const quizFinished = (this.state.activeQuestion + 1 === questions.length);

    console.log('answerIndex: ' + answerIndex, 'quizFinished: ' + quizFinished);

    this.setState({
      correctAnswers:  (correctAnswer) ? s.correctAnswers + 1 : s.correctAnswers,
      wrongAnswers:  (!correctAnswer) ? s.wrongAnswers + 1 : s.wrongAnswers,
      activeQuestion: (quizFinished) ? 0 : s.activeQuestion + 1,
      activeView: (quizFinished) ? ActiveView.summary : s.activeView
    })
  };

  getActiveQuestion(): IQuestion {
    return questions[this.state.activeQuestion];
  }

  // get view by activeView enum
  getActiveView(): JSX.Element | undefined {
    let view;

    switch (this.state.activeView) {
      case ActiveView.start:
        view = <StartPage onStart={this.startQuiz}/>;
        break;

      case ActiveView.quiz:
        const q = this.getActiveQuestion();
        view = <Question text={q.text}
                         options={q.options}
                         onNext={this.nextQuestion}/>;
        break;

      case ActiveView.summary:
        view = <SummaryPage correct={this.state.correctAnswers}
                            total={questions.length}
                            onStartAgain={this.startQuiz}/>;

        break;
    }

    return view;
  }


  render() {
    const view = this.getActiveView();

    return (
      <div className="App">
        {view}
      </div>
    );
  }
}

export default App;
