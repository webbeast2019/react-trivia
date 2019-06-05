import React from 'react';
import {Dispatch} from 'redux';
import {ActiveViewEmum} from '../models/ActiveView';
import {connect} from 'react-redux';

interface IProps {
  onStart: any
}

const StartPage: React.FC<IProps> = ({onStart}) => {
  return (
    <div>
      <h1>Start Page</h1>
      <p>Click to start the quiz</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
};


const mapDispatchToProps = (dispatch: Dispatch) => ({
  onStart: () => dispatch({
    type:'CHANGE_VIEW',
    payload: ActiveViewEmum.quiz
  })
});

export default connect(null, mapDispatchToProps)(StartPage);