import React, {useEffect} from 'react';
import './App.css';
import {ActiveViewEmum} from './models/ActiveView';
import StartPage from './pages/StartPage';
import SummaryPage from './pages/SummaryPage';
import QuizPage from './pages/QuizPage';
import {connect} from 'react-redux';

interface IProp {
  activeView: ActiveViewEmum
}

const App: React.FC<IProp> = ({activeView}) => {

  useEffect(() => {
    console.log('componentDidMount App');
  }, []);

  // get active page: start / quiz / summary
  const getActiveView = (): JSX.Element | undefined => {
    let view;

    switch (activeView) {
      case ActiveViewEmum.start:
        view = <StartPage/>;
        break;

      case ActiveViewEmum.quiz:
        view = <QuizPage/>;
        break;

      case ActiveViewEmum.summary:
        view = <SummaryPage/>;

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

const mapStateToProps = (state: any) => ({
  activeView: state.pageView.activeView,
});

export default connect(mapStateToProps)(App);
