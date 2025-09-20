import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/quizData';
import '../styles/Quiz.css';

const Quiz = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        setGameStarted(true);
        setShowResults(false);
        setUserAnswers({});
        setCurrentQuestionIndex(0);
    };

    const handleAnswerSelect = (questionIndex, answer) => {
        setUserAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setShowResults(true);
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

    const renderIntro = () => (
        <div className="quiz-intro">
            <h1>Ôn Tập Kiến Thức Triết Học</h1>
            <p>Hãy cùng nhau kiểm tra kiến thức về đấu tranh giai cấp và các khái niệm liên quan qua 10 câu hỏi trắc nghiệm này nhé.</p>
            <button onClick={handleStartQuiz} className="quiz-button start-button">Bắt đầu</button>
        </div>
    );

    const renderResults = () => {
        const score = calculateScore();
        return (
            <div className="quiz-results">
                <h2>Hoàn Thành!</h2>
                <p>Bạn đã trả lời đúng {score} / {quizData.length} câu hỏi.</p>
                <div className="quiz-nav">
                    <button onClick={handleStartQuiz} className="quiz-button">Chơi lại</button>
                    <button onClick={() => navigate('/')} className="quiz-button">Về trang chủ</button>
                </div>
            </div>
        );
    };

    const renderQuiz = () => {
        const question = quizData[currentQuestionIndex];
        const userAnswer = userAnswers[currentQuestionIndex];

        return (
            <div className="quiz-container">
                <div className="quiz-question-header">
                    <h2>Câu hỏi {currentQuestionIndex + 1}/{quizData.length}</h2>
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
                        <p><strong>Đáp án đúng:</strong> {question.correctAnswer}</p>
                        <p><strong>Giải thích:</strong> {question.explanation}</p>
                    </div>
                )}
                <div className="quiz-nav">
                    <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="quiz-button">Câu trước</button>
                    <button onClick={handleNext} disabled={!userAnswer} className="quiz-button">
                        {currentQuestionIndex === quizData.length - 1 ? 'Xem kết quả' : 'Câu tiếp'}
                    </button>
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

export default Quiz;