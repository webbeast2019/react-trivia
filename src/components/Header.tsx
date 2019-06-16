import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

interface IProps {
  correct: number;
  wrong: number;
}

const Header: React.FC<IProps> = ({correct, wrong}) => {
  return (
    <div>
      <h1>My Quiz</h1>
      <p>Correct: {correct}  Wrong: {wrong}</p>
      <Link to="/summary">
        <Button variant="contained" color="secondary">
          finish now
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  correct: state.scores.correctAnswers,
  wrong: state.scores.wrongAnswers,
});

export default connect(mapStateToProps)(Header);