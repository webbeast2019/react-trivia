import React, {useEffect} from 'react';
import './App.scss';
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


  return (
    <div className="App">
      <Switch>
        <Route path="/start" component={StartPage}/>
        <Route path="/question/:index" component={QuizPage}/>
        <Route path="/summary" component={SummaryPage}/>

        {/* Redirects */}
        <Redirect exact from="/" to="/start"/>
        <Redirect exact from="/question" to="/question/1"/>

        {/* Fallback */}
        <Route path="/" render={() => <div>Page not found</div>}/>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  // activeView: state.pageView.activeView,
});

export default connect(mapStateToProps)(App);
