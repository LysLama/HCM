import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizDataEn as quizData } from '../../data/quizDataEn.js';
import '../../styles/Quiz.css';

const QuizEn = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [aiExplanations, setAiExplanations] = useState({});
  const [aiLoading, setAiLoading] = useState({});
  const [aiErrors, setAiErrors] = useState({});
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    setGameStarted(true);
    setShowResults(false);
    setUserAnswers({});
    setCurrentQuestionIndex(0);
    setAiExplanations({});
    setAiLoading({});
    setAiErrors({});
  };

  const handleAnswerSelect = (questionIndex, answer) => {
    setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
      setAttemptCount(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    return quizData.reduce((score, question, index) => {
      return userAnswers[index] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  useEffect(() => {
    const stored = localStorage.getItem('quizAttemptCountEn');
    if (stored) {
      const parsed = Number(stored);
      if (!Number.isNaN(parsed)) {
        setAttemptCount(parsed);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quizAttemptCountEn', String(attemptCount));
  }, [attemptCount]);

  useEffect(() => {
    if (quizData.length && currentQuestionIndex >= quizData.length) {
      setCurrentQuestionIndex(0);
    }
  }, [currentQuestionIndex, quizData.length]);

  const confettiPieces = useMemo(() => Array.from({ length: 36 }, (_, index) => index), []);

  const buildExplanationPrompt = (question, userAnswer) => {
    const optionsText = question.options
      .map((opt, idx) => `${String.fromCharCode(65 + idx)}. ${opt}`)
      .join('\n');
    const isCorrect = userAnswer === question.correctAnswer;
    return [
      'You are a learning assistant. Explain briefly (2-4 sentences), clearly, and do not invent sources.',
      `Task: explain why the correct answer is correct, and why the learner's choice ${isCorrect ? 'is appropriate.' : 'is not correct.'}`,
      '',
      `Question: ${question.question}`,
      'Options:',
      optionsText,
      `Correct answer: ${question.correctAnswer}`,
      `Learner chose: ${userAnswer}`
    ].join('\n');
  };

  const fetchAIExplanation = async (question, userAnswer) => {
    const payload = {
      messages: [
        { role: 'system', content: 'You are a concise English tutor. Avoid hallucinations.' },
        { role: 'user', content: buildExplanationPrompt(question, userAnswer) }
      ]
    };
    const response = await fetch('/api/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    let data;
    try {
      data = await response.json();
    } catch (e) {
      const raw = await response.text();
      throw new Error(`Invalid JSON from AI: ${raw}`);
    }

    const answer = data?.result?.response || data?.result?.output || data?.response || data?.output || JSON.stringify(data).slice(0, 800);
    if (!response.ok) {
      throw new Error(`${response.status}: ${answer}`);
    }
    return typeof answer === 'string' ? answer : JSON.stringify(answer);
  };

  useEffect(() => {
    const userAnswer = userAnswers[currentQuestionIndex];
    if (!userAnswer) return;
    if (aiExplanations[currentQuestionIndex] || aiLoading[currentQuestionIndex]) return;

    const question = quizData[currentQuestionIndex];
    setAiLoading(prev => ({ ...prev, [currentQuestionIndex]: true }));
    setAiErrors(prev => ({ ...prev, [currentQuestionIndex]: null }));

    fetchAIExplanation(question, userAnswer)
      .then((text) => {
        setAiExplanations(prev => ({ ...prev, [currentQuestionIndex]: text }));
      })
      .catch((error) => {
        setAiErrors(prev => ({ ...prev, [currentQuestionIndex]: error.message || 'AI error' }));
      })
      .finally(() => {
        setAiLoading(prev => ({ ...prev, [currentQuestionIndex]: false }));
      });
  }, [currentQuestionIndex, userAnswers, aiExplanations, aiLoading]);

  const renderIntro = () => (
    <div className="quiz-intro">
      <h1>Review Quiz: Great National Unity</h1>
      <p>Quickly review key points of Ho Chi Minh Thought on great national unity through {quizData.length} multiple-choice questions.</p>
      <button onClick={handleStartQuiz} className="quiz-button start-button">Start</button>
    </div>
  );

  const renderResults = () => {
    const score = calculateScore();
    const isHighScore = score >= Math.ceil(quizData.length * 0.8);
    return (
      <div className="quiz-results">
        {isHighScore && (
          <div className="confetti" aria-hidden="true">
            {confettiPieces.map(piece => (
              <span key={piece} className="confetti-piece" />
            ))}
          </div>
        )}
        <h2>Completed!</h2>
        <p>You answered {score} / {quizData.length} correctly.</p>
        <p><strong>Attempts:</strong> {attemptCount}</p>
        <div className="quiz-nav">
          <button onClick={handleStartQuiz} className="quiz-button">Retry</button>
          <button onClick={() => navigate('/en')} className="quiz-button">Home</button>
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    const question = quizData[currentQuestionIndex];
    if (!question) {
      return (
        <div className="quiz-results">
          <h2>Loading questions...</h2>
          <p>Please retry if the data is not ready yet.</p>
        </div>
      );
    }
    const userAnswer = userAnswers[currentQuestionIndex];
    const aiExplanation = aiExplanations[currentQuestionIndex];
    const aiIsLoading = aiLoading[currentQuestionIndex];
    const aiError = aiErrors[currentQuestionIndex];

    return (
      <div className="quiz-layout">
        <aside className="quiz-sidebar" aria-label="Question list">
          <div className="quiz-sidebar-title">Question list</div>
          <div className="quiz-grid">
            {quizData.map((_, index) => {
              const isActive = index === currentQuestionIndex;
              const isAnswered = !!userAnswers[index];
              const className = `quiz-index-button${isActive ? ' active' : ''}${isAnswered ? ' answered' : ''}`;
              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => setCurrentQuestionIndex(index)}
                  aria-label={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="quiz-container">
          <div className="quiz-question-header">
            <h2>Question {currentQuestionIndex + 1}/{quizData.length}</h2>
            <p>{question.question}</p>
          </div>
          <div className="quiz-options">
            {question.options.map((option, index) => {
              const isSelected = userAnswer === option;
              let buttonClass = 'option-button';
              if (userAnswer) {
                if (option === question.correctAnswer) {
                  buttonClass += ' correct';
                } else if (isSelected) {
                  buttonClass += ' incorrect';
                }
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestionIndex, option)}
                  className={buttonClass}
                  disabled={!!userAnswer}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {userAnswer && (
            <div className="quiz-feedback">
              <p><strong>Correct:</strong> {question.correctAnswer}</p>
              {aiIsLoading && <p><strong>AI explanation:</strong> Generating...</p>}
              {!aiIsLoading && aiExplanation && (
                <p><strong>AI explanation:</strong> {aiExplanation}</p>
              )}
              {!aiIsLoading && !aiExplanation && question.explanation && (
                <p><strong>Fallback explanation:</strong> {question.explanation}</p>
              )}
              {!aiIsLoading && !aiExplanation && !question.explanation && aiError && (
                <p><strong>Explanation:</strong> Unable to generate at the moment.</p>
              )}
            </div>
          )}
          <div className="quiz-nav">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="quiz-button">Prev</button>
            <button onClick={handleNext} disabled={!userAnswer} className="quiz-button">
              {currentQuestionIndex === quizData.length - 1 ? 'Results' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="quiz-page">
      {!gameStarted
        ? renderIntro()
        : showResults
          ? renderResults()
          : renderQuiz()
      }
    </main>
  );
};

export default QuizEn;
