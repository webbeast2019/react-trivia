import React, {useEffect} from 'react';
import './App.scss';
import {ActiveViewEmum} from './models/ActiveView';
import StartPage from './pages/StartPage';
import SummaryPage from './pages/SummaryPage';
import QuizPage from './pages/QuizPage';
import {connect} from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom';

interface IProp {
  // activeView: ActiveViewEmum
}

const App: React.FC<IProp> = ({/*activeView*/}) => {

  useEffect(() => {
    console.log('componentDidMount App');
  }, []);

  // get active page: start / quiz / summary
  // const getActiveView = (): JSX.Element | undefined => {
  //   let view;
  //
  //   switch (activeView) {
  //     case ActiveViewEmum.start:
  //       view = <StartPage/>;
  //       break;
  //
  //     case ActiveViewEmum.quiz:
  //       view = <QuizPage/>;
  //       break;
  //
  //     case ActiveViewEmum.summary:
  //       view = <SummaryPage/>;
  //
  //       break;
  //   }
  //   return view;
  // };

  return (
    <div className="App">
      <Switch>
        <Route path="/start" component={StartPage}/>
        <Route path="/question" component={QuizPage}/>
        <Route path="/summary" component={SummaryPage}/>
        <Redirect exact from="/" to="/start"/>
        <Route path="/" render={()=> <div>Page not found</div>}/>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  // activeView: state.pageView.activeView,
});

export default connect(mapStateToProps)(App);
