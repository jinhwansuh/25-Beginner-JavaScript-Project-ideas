import { Input, Text, Button } from '../base/index.js';
import quizStyle from '../../style/style.css';

export default function QuizCreate({
  targetEl,
  onInputChange,
  onAnswerClick,
  onAddQuizClick,
  onTaskQuizClick,
  onDeleteQuizClick,
}) {
  const quizCreateEl = document.createElement('div');
  quizCreateEl.className = quizStyle.quiz_create;
  const answerArray = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
  ];

  new Text({ targetEl: quizCreateEl, tag: 'h2', text: 'Create Quiz' });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Question' });
  new Input({
    targetEl: quizCreateEl,
    state: 'question',
    placeholder: 'Question',
    className: 'answer-input',
    onChange: onInputChange,
  });
  new Text({ targetEl: quizCreateEl, tag: 'h3', text: 'Answers' });

  answerArray.map((wrapper, i) => {
    wrapper.className = 'answer';

    new Button({
      targetEl: wrapper,
      state: `answer${i + 1}`,
      onClick: onAnswerClick,
      className: `answer${i + 1}-button a-btn`,
      text: i + 1,
    });
    new Input({
      targetEl: wrapper,
      state: `answer${i + 1}`,
      placeholder: 'Answer...',
      className: 'answer-input',
      onChange: onInputChange,
    });
    quizCreateEl.appendChild(wrapper);
  });

  new Button({
    targetEl: quizCreateEl,
    text: 'Add Quiz',
    onClick: onAddQuizClick,
    className: 'quiz-button',
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Task Quiz',
    onClick: onTaskQuizClick,
    className: 'quiz-button',
  });
  new Button({
    targetEl: quizCreateEl,
    text: 'Delete Quiz',
    onClick: onDeleteQuizClick,
    className: 'quiz-button',
  });

  targetEl.appendChild(quizCreateEl);
}
