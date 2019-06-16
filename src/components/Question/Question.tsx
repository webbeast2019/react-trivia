import React, {useState} from 'react';
import {connect} from 'react-redux';
import {IQuestion} from '../../models/IQuestion';
import {Dispatch} from 'redux';
import {List, ListItem, ListItemText} from '@material-ui/core';
import './Question.scss'
import {Redirect} from 'react-router';
import {ActiveViewEmum} from '../../models/ActiveView';

interface IProps {
  text: string;
  options: Array<string>;
  correctIndex: number;
  onNext: Function;
  isLast: boolean;
}

const Question: React.FC<IProps> = ({text, options, correctIndex, onNext, isLast}) => {
  const [finished, setFinished] = useState(false);

  function onClick(answerIndex: number) {
    onNext(answerIndex, correctIndex, isLast);
    if (isLast) {
      setFinished(true);
    }
  }

  const optionalAnswers = options.map((q: string, i: number) => (
    <ListItem button key={i} onClick={onClick.bind(null, i)}>
      <ListItemText>{q}</ListItemText>
    </ListItem>
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

    if (isLast) {
      dispatch({type: 'CHANGE_VIEW', payload: ActiveViewEmum.summary})
    } else {
      dispatch({type: 'ADVANCE_QUESTION'});
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);