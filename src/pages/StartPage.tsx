import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

interface IProps {
}

const StartPage: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <p>Click to start the quiz</p>
      <Link to="/question">
        <Button variant="contained" color="primary">
          Start
        </Button>
      </Link>
    </div>
  );
};


// const mapDispatchToProps = (dispatch: Dispatch) => ({
  // onStart: () => dispatch({
  //   type: 'CHANGE_VIEW',
  //   payload: ActiveViewEmum.quiz
  // })
// });

// export default connect(null, mapDispatchToProps)(StartPage);
export default StartPage;