import React from 'react';

interface IProps {
  text: string
  options: Array<string>,
  onNext: Function
}

const Question: React.FC<IProps> = ({text, options, onNext}) => {
  function onClick(answerIndex: number) {
    onNext(answerIndex);
  }

  const optionalAnswers = options.map((q: string, i: number) => (
    <li key={i}>
      <label onClick={onClick.bind(null, i)}>
        <span>{q}</span>
      </label>
    </li>
  ));

  return (
    <div>
      <h1>{text}</h1>
      <ul>
        {optionalAnswers}
      </ul>
    </div>
  );
};

export default Question;