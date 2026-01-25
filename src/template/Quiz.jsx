import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/quizData';
import '../styles/Quiz.css';

const Quiz = () => {
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
        const stored = localStorage.getItem('quizAttemptCount');
        if (stored) {
            const parsed = Number(stored);
            if (!Number.isNaN(parsed)) {
                setAttemptCount(parsed);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('quizAttemptCount', String(attemptCount));
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
            'Bạn là trợ lý học tập. Hãy giải thích ngắn gọn (2-4 câu), rõ ràng, không bịa nguồn.',
            'Nhiệm vụ: giải thích vì sao đáp án đúng là đúng, và vì sao lựa chọn của người học ' + (isCorrect ? 'là phù hợp.' : 'không đúng.'),
            '',
            `Câu hỏi: ${question.question}`,
            'Lựa chọn:',
            optionsText,
            `Đáp án đúng: ${question.correctAnswer}`,
            `Người học chọn: ${userAnswer}`
        ].join('\n');
    };

    const fetchAIExplanation = async (question, userAnswer) => {
        const payload = {
            messages: [
                { role: 'system', content: 'You are a concise Vietnamese tutor. Avoid hallucinations.' },
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
            <h1>Ôn tập: Đại đoàn kết toàn dân tộc</h1>
            <p>Kiểm tra nhanh các luận điểm cốt lõi trong tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc qua {quizData.length} câu hỏi trắc nghiệm.</p>
            <button onClick={handleStartQuiz} className="quiz-button start-button">Bắt đầu</button>
        </div>
    );

    const renderResults = () => {
        const score = calculateScore();
        const isHighScore = score >= 40;
        return (
            <div className="quiz-results">
                {isHighScore && (
                    <div className="confetti" aria-hidden="true">
                        {confettiPieces.map(piece => (
                            <span key={piece} className="confetti-piece" />
                        ))}
                    </div>
                )}
                <h2>Hoàn Thành!</h2>
                <p>Bạn đã trả lời đúng {score} / {quizData.length} câu hỏi.</p>
                <p><strong>Lượt chơi:</strong> {attemptCount}</p>
                <div className="quiz-nav">
                    <button onClick={handleStartQuiz} className="quiz-button">Chơi lại</button>
                    <button onClick={() => navigate('/')} className="quiz-button">Về trang chủ</button>
                </div>
            </div>
        );
    };

    const renderQuiz = () => {
        const question = quizData[currentQuestionIndex];
        if (!question) {
            return (
                <div className="quiz-results">
                    <h2>Đang tải câu hỏi...</h2>
                    <p>Vui lòng thử lại nếu dữ liệu chưa sẵn sàng.</p>
                </div>
            );
        }
        const userAnswer = userAnswers[currentQuestionIndex];
        const aiExplanation = aiExplanations[currentQuestionIndex];
        const aiIsLoading = aiLoading[currentQuestionIndex];
        const aiError = aiErrors[currentQuestionIndex];

        return (
            <div className="quiz-layout">
                <aside className="quiz-sidebar" aria-label="Danh sách câu hỏi">
                    <div className="quiz-sidebar-title">Danh sách câu hỏi</div>
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
                                    aria-label={`Câu ${index + 1}`}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                    </div>
                </aside>

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
                            {aiIsLoading && <p><strong>Giải thích (AI):</strong> Đang tạo giải thích...</p>}
                            {!aiIsLoading && aiExplanation && (
                                <p><strong>Giải thích (AI):</strong> {aiExplanation}</p>
                            )}
                            {!aiIsLoading && !aiExplanation && question.explanation && (
                                <p><strong>Giải thích (dự phòng):</strong> {question.explanation}</p>
                            )}
                            {!aiIsLoading && !aiExplanation && !question.explanation && aiError && (
                                <p><strong>Giải thích:</strong> Không thể tạo giải thích lúc này.</p>
                            )}
                        </div>
                    )}
                    <div className="quiz-nav">
                        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0} className="quiz-button">Câu trước</button>
                        <button onClick={handleNext} disabled={!userAnswer} className="quiz-button">
                            {currentQuestionIndex === quizData.length - 1 ? 'Xem kết quả' : 'Câu tiếp'}
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

export default Quiz;