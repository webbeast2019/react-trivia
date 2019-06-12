import React from 'react';
import {Dispatch} from 'redux';
import {ActiveViewEmum} from '../models/ActiveView';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';

interface IProps {
  onStart: any
}

const StartPage: React.FC<IProps> = ({onStart}) => {
  return (
    <div>
      <h1>Start Page</h1>
      <p>Click to start the quiz</p>
      <Button variant="contained" color="primary" onClick={onStart}>
        Start
      </Button>
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