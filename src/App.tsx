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
  activeView: ActiveView
  activeQuestion: number
}

class App extends React.Component<{}, IState> {
  constructor(props = {}) {
    super(props);

    this.state = {
      activeView: ActiveView.start,
      activeQuestion: 0,
    };
  }

  componentDidMount() {
    console.log('componentDidMount App');
  }

  startQuiz = () => {
    this.setState({
      activeQuestion: 0,
      activeView: ActiveView.quiz
    })
  };

  nextQuestion = (answerIndex: number) => {
    const quizFinished = (this.state.activeQuestion + 1 === questions.length);
    console.log('answerIndex: ' + answerIndex, 'quizFinished: ' + quizFinished);

    this.setState({
      activeQuestion: (quizFinished) ? 0 : this.state.activeQuestion + 1,
      activeView: (quizFinished) ? ActiveView.summary : this.state.activeView
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
        view = <SummaryPage onStartAgain={this.startQuiz}/>;

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
