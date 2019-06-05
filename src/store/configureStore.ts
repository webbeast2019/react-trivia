import {createStore} from 'redux'
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
  },
  {
    id: 'q4',
    text: 'Aside from Denmark, Danish is the official language of WHICH other country?',
    options: ['Greenland', 'Germany', 'Iceland', 'Finland'],
    correctIndex: 0
  },
];

const dataReducer = (state = questions, action: any) => {
  return state;
};


export default function configureStore() {
  return createStore(dataReducer);
}