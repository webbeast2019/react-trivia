import React, {useState} from 'react';
import {connect} from 'react-redux';
import {IQuestion} from '../../models/IQuestion';
import {Dispatch} from 'redux';
import {List, ListItem, ListItemText} from '@material-ui/core';
import './Question.scss'
import {Redirect, RouteComponentProps, withRouter} from 'react-router';
import {Link} from 'react-router-dom';

interface IProps {
  text: string;
  options: Array<string>;
  correctIndex: number;
  onNext: Function;
  isLast: boolean;
}

const Question: React.FC<IProps & RouteComponentProps> = ({text, options, correctIndex, onNext, isLast, match}) => {
  let questionIndex = 0;

  if(match && match.params) {
    // @ts-ignore
    questionIndex = parseInt(match.params['index']);
  }

  const [finished, setFinished] = useState(false);
  console.log(match);

  function onClick(answerIndex: number) {
    onNext(answerIndex, correctIndex, isLast);
    if (isLast) {
      setFinished(true);
    }
  }

  const optionalAnswers = options.map((q: string, i: number) => (
    <Link  key={i} to={`/question/${questionIndex + 1}`}>
      <ListItem button onClick={onClick.bind(null, i)}>
        <ListItemText>{q}</ListItemText>
      </ListItem>
    </Link>
  ));


  if (finished) {
    return <Redirect to="/summary"/>;
  }

  return (
    <div className="Question">
      <h1>{text}</h1>
      <List className="Question-options">
        {optionalAnswers}
      </List>
    </div>
  );
};


const mapStateToProps = (state: any) => {
  const question: IQuestion = state.questions[state.pageView.activeQuestion];
  return {
    text: question.text,
    options: question.options,
    correctIndex: question.correctIndex,
    isLast: state.pageView.activeQuestion === state.questions.length - 1
  }
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onNext: (answerIndex: number, correctIndex: number, isLast: boolean) => {
    if (answerIndex === correctIndex) {
      dispatch({type: 'ADVANCE_CORRECT'});
    } else {
      dispatch({type: 'ADVANCE_WRONG'});
    }

    if (!isLast) {
      dispatch({type: 'ADVANCE_QUESTION'});
    }
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));