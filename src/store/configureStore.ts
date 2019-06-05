import {combineReducers, createStore} from 'redux'
import {ActiveViewEmum} from '../models/ActiveView';
import {IQuestion} from '../models/IQuestion';

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

const questionsReducer = (state = questions, action: any) => {
  return state;
};

const scoresInitState = {
  correctAnswers: 0,
  wrongAnswers: 0,
};

const scoresReducer = (state = scoresInitState, action: any) => {
  return state;
};

const pageViewState = {
  activeView: ActiveViewEmum.start,
  activeQuestion: 0,
};

const pageViewReducer = (state = pageViewState, action: any) => {
  return state;
};

export default function configureStore() {
  // combine all reducers to create  root reducer
  const rootReducer = combineReducers({
    questions: questionsReducer,
    scores: scoresReducer,
    pageView: pageViewReducer
  });

  return createStore(rootReducer);
}