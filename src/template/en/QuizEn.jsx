import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizDataEn as quizData } from '../../data/quizDataEn.js';
import '../../styles/Quiz.css';

export default function QuizEn() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const begin = () => { setStarted(true); setIndex(0); setAnswers({}); setShowResults(false); };
  const select = (i, ans) => setAnswers(prev => ({ ...prev, [i]: ans }));
  const next = () => {
    if (index < quizData.length - 1) setIndex(i => i + 1); else setShowResults(true);
  };
  const prev = () => { if (index > 0) setIndex(i => i - 1); };
  const score = quizData.reduce((s, q, i) => answers[i] === q.correctAnswer ? s + 1 : s, 0);

  if (!started) return (
    <main className="quiz-page">
      <div className="quiz-intro">
        <h1>Philosophy Review Quiz</h1>
        <p>This quiz reinforces key concepts about class, struggle, historical role and future perspectives.</p>
        <button onClick={begin} className="quiz-button start-button">Start</button>
      </div>
    </main>
  );

  if (showResults) return (
    <main className="quiz-page">
      <div className="quiz-results">
        <h2>Completed!</h2>
        <p>You answered {score} / {quizData.length} correctly.</p>
        <div className="quiz-nav">
          <button onClick={begin} className="quiz-button">Retry</button>
          <button onClick={() => navigate('/en')} className="quiz-button">Home</button>
        </div>
      </div>
    </main>
  );

  const q = quizData[index];
  const userAnswer = answers[index];
  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <div className="quiz-question-header">
          <h2>Question {index + 1}/{quizData.length}</h2>
          <p>{q.question}</p>
        </div>
        <div className="quiz-options">
          {q.options.map((opt, i) => {
            const selected = userAnswer === opt;
            let cls = 'option-button';
            if (userAnswer) {
              if (opt === q.correctAnswer) cls += ' correct';
              else if (selected) cls += ' incorrect';
            }
            return <button key={i} disabled={!!userAnswer} onClick={() => select(index, opt)} className={cls}>{opt}</button>;
          })}
        </div>
        {userAnswer && (
          <div className="quiz-feedback">
            <p><strong>Correct:</strong> {q.correctAnswer}</p>
            <p><strong>Explanation:</strong> {q.explanation}</p>
          </div>
        )}
        <div className="quiz-nav">
          <button onClick={prev} disabled={index === 0} className="quiz-button">Prev</button>
            <button onClick={next} disabled={!userAnswer} className="quiz-button">{index === quizData.length - 1 ? 'Results' : 'Next'}</button>
        </div>
      </div>
    </main>
  );
}
