import React, { useState, useEffect } from 'react';
import { useReadingProgress } from '../context/ReadingProgressContext';
import '../styles/ReadingProgress.css';

const ReadingProgressDashboard = () => {
    const {
        progress,
        getOverallProgress,
        removeBookmark,
        removeNote,
        exportProgress,
        resetProgress
    } = useReadingProgress();
    
    const [activeTab, setActiveTab] = useState('overview');
    const [shareText, setShareText] = useState('');

    const overallProgress = getOverallProgress();
    const totalBookmarks = progress.bookmarks.length;
    const totalNotes = Object.keys(progress.notes).filter(key => progress.notes[key]).length;
    const readingTimeHours = Math.floor(progress.readingTime / 60);
    const readingTimeMinutes = progress.readingTime % 60;

    const chapters = [
        { id: 'lythuyet', title: 'Lý Thuyết Nền Tảng' },
        { id: 'vaitro', title: 'Vai Trò Lịch Sử' },
        { id: 'tuonglai', title: 'Tương Lai Xã Hội' },
        { id: 'ketluan', title: 'Kết Luận' }
    ];

    const handleShare = () => {
        const shareData = {
            title: 'Tiến trình học tập Triết học Mác-Lênin',
            text: `Tôi đã hoàn thành ${overallProgress}% khóa học về Đấu tranh Giai cấp! 📚✨`,
            url: window.location.origin
        };

        if (navigator.share) {
            navigator.share(shareData);
        } else {
            // Fallback for browsers that don't support Web Share API
            setShareText(`${shareData.text} ${shareData.url}`);
            navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
            alert('Đã copy link chia sẻ vào clipboard!');
        }
    };

    const handleExport = () => {
        const exportData = exportProgress();
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `philosophy-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        URL.revokeObjectURL(url);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="reading-progress-dashboard">
            {/* Header */}
            <div className="dashboard-header">
                <h2>📚 Dashboard Tiến Trình Học Tập</h2>
                <p>Theo dõi và quản lý quá trình học tập triết học của bạn</p>
            </div>

            {/* Progress Overview */}
            <div className="progress-overview">
                <div className="progress-circle">
                    <svg viewBox="0 0 120 120" className="circular-progress">
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="#e6e6e6"
                            strokeWidth="8"
                        />
                        <circle
                            cx="60"
                            cy="60"
                            r="54"
                            fill="none"
                            stroke="url(#progressGradient)"
                            strokeWidth="8"
                            strokeDasharray={`${2 * Math.PI * 54}`}
                            strokeDashoffset={`${2 * Math.PI * 54 * (1 - overallProgress / 100)}`}
                            strokeLinecap="round"
                            transform="rotate(-90 60 60)"
                        />
                        <defs>
                            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#667eea" />
                                <stop offset="100%" stopColor="#764ba2" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="progress-text">
                        <span className="progress-number">{overallProgress}%</span>
                        <span className="progress-label">Hoàn thành</span>
                    </div>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon">📖</div>
                        <div className="stat-content">
                            <span className="stat-number">{Object.keys(progress.chapters).length}/4</span>
                            <span className="stat-label">Chương đã đọc</span>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <div className="stat-icon">🔖</div>
                        <div className="stat-content">
                            <span className="stat-number">{totalBookmarks}</span>
                            <span className="stat-label">Bookmarks</span>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <div className="stat-icon">📝</div>
                        <div className="stat-content">
                            <span className="stat-number">{totalNotes}</span>
                            <span className="stat-label">Ghi chú</span>
                        </div>
                    </div>
                    
                    <div className="stat-card">
                        <div className="stat-icon">⏱️</div>
                        <div className="stat-content">
                            <span className="stat-number">{readingTimeHours}h {readingTimeMinutes}m</span>
                            <span className="stat-label">Thời gian học</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="tab-navigation">
                {[
                    { id: 'overview', label: 'Tổng quan', icon: '📊' },
                    { id: 'chapters', label: 'Chương', icon: '📚' },
                    { id: 'bookmarks', label: 'Bookmarks', icon: '🔖' },
                    { id: 'notes', label: 'Ghi chú', icon: '📝' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="overview-content">
                        <h3>📈 Tiến trình học tập</h3>
                        <div className="chapters-progress">
                            {chapters.map(chapter => {
                                const chapterProgress = progress.chapters[chapter.id];
                                const percentage = chapterProgress?.progress || 0;
                                const isCompleted = chapterProgress?.completed || false;
                                
                                return (
                                    <div key={chapter.id} className="chapter-progress-item">
                                        <div className="chapter-info">
                                            <span className="chapter-title">{chapter.title}</span>
                                            <span className="chapter-status">
                                                {isCompleted ? '✅ Hoàn thành' : `${percentage}%`}
                                            </span>
                                        </div>
                                        <div className="progress-bar">
                                            <div 
                                                className="progress-fill"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="action-buttons">
                            <button className="action-btn primary" onClick={handleShare}>
                                🔗 Chia sẻ tiến trình
                            </button>
                            <button className="action-btn secondary" onClick={handleExport}>
                                💾 Xuất dữ liệu
                            </button>
                            <button className="action-btn danger" onClick={resetProgress}>
                                🔄 Reset tiến trình
                            </button>
                        </div>
                    </div>
                )}

                {/* Chapters Tab */}
                {activeTab === 'chapters' && (
                    <div className="chapters-content">
                        <h3>📚 Chi tiết các chương</h3>
                        <div className="chapters-list">
                            {chapters.map(chapter => {
                                const chapterData = progress.chapters[chapter.id];
                                return (
                                    <div key={chapter.id} className="chapter-detail-card">
                                        <div className="chapter-header">
                                            <h4>{chapter.title}</h4>
                                            <span className={`status-badge ${chapterData?.completed ? 'completed' : 'in-progress'}`}>
                                                {chapterData?.completed ? '✅ Hoàn thành' : '📖 Đang đọc'}
                                            </span>
                                        </div>
                                        
                                        {chapterData && (
                                            <div className="chapter-details">
                                                <div className="detail-item">
                                                    <strong>Tiến trình:</strong> {chapterData.progress || 0}%
                                                </div>
                                                {chapterData.lastReadAt && (
                                                    <div className="detail-item">
                                                        <strong>Đọc lần cuối:</strong> {formatDate(chapterData.lastReadAt)}
                                                    </div>
                                                )}
                                                {chapterData.completedAt && (
                                                    <div className="detail-item">
                                                        <strong>Hoàn thành:</strong> {formatDate(chapterData.completedAt)}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Bookmarks Tab */}
                {activeTab === 'bookmarks' && (
                    <div className="bookmarks-content">
                        <h3>🔖 Bookmarks ({totalBookmarks})</h3>
                        {progress.bookmarks.length === 0 ? (
                            <div className="empty-state">
                                <p>Chưa có bookmark nào. Hãy thêm bookmark khi đọc để lưu lại những phần quan trọng!</p>
                            </div>
                        ) : (
                            <div className="bookmarks-list">
                                {progress.bookmarks.map(bookmark => (
                                    <div key={bookmark.id} className="bookmark-item">
                                        <div className="bookmark-content">
                                            <h4>{bookmark.title}</h4>
                                            <p>{bookmark.description}</p>
                                            <div className="bookmark-meta">
                                                <span>📍 {bookmark.chapter}</span>
                                                <span>⏰ {formatDate(bookmark.createdAt)}</span>
                                            </div>
                                        </div>
                                        <button 
                                            className="remove-btn"
                                            onClick={() => removeBookmark(bookmark.id)}
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Notes Tab */}
                {activeTab === 'notes' && (
                    <div className="notes-content">
                        <h3>📝 Ghi chú ({totalNotes})</h3>
                        {totalNotes === 0 ? (
                            <div className="empty-state">
                                <p>Chưa có ghi chú nào. Hãy thêm ghi chú để lưu lại những suy nghĩ của bạn!</p>
                            </div>
                        ) : (
                            <div className="notes-list">
                                {Object.entries(progress.notes)
                                    .filter(([key, note]) => note)
                                    .map(([key, note]) => {
                                        const [chapterId, sectionId] = key.split('_');
                                        const chapter = chapters.find(c => c.id === chapterId);
                                        
                                        return (
                                            <div key={key} className="note-item">
                                                <div className="note-content">
                                                    <div className="note-header">
                                                        <strong>{chapter?.title}</strong>
                                                        <span className="section-id">#{sectionId}</span>
                                                    </div>
                                                    <p className="note-text">{note.text}</p>
                                                    <div className="note-meta">
                                                        <span>📅 {formatDate(note.createdAt)}</span>
                                                        {note.updatedAt !== note.createdAt && (
                                                            <span>✏️ Sửa: {formatDate(note.updatedAt)}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <button 
                                                    className="remove-btn"
                                                    onClick={() => removeNote(chapterId, sectionId)}
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        );
                                    })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReadingProgressDashboard;