import React, { createContext, useContext, useState, useEffect } from 'react';

const ReadingProgressContext = createContext();

export const useReadingProgress = () => {
    const context = useContext(ReadingProgressContext);
    if (!context) {
        throw new Error('useReadingProgress must be used within ReadingProgressProvider');
    }
    return context;
};

export const ReadingProgressProvider = ({ children }) => {
    const [progress, setProgress] = useState({
        chapters: {},
        bookmarks: [],
        notes: {},
        readingTime: 0,
        totalSections: 0,
        completedSections: 0
    });

    // Load progress from localStorage on mount
    useEffect(() => {
        const savedProgress = localStorage.getItem('philosophyReadingProgress');
        if (savedProgress) {
            setProgress(JSON.parse(savedProgress));
        }
    }, []);

    // Save progress to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('philosophyReadingProgress', JSON.stringify(progress));
    }, [progress]);

    // Mark chapter as completed
    const markChapterCompleted = (chapterId) => {
        setProgress(prev => ({
            ...prev,
            chapters: {
                ...prev.chapters,
                [chapterId]: {
                    ...prev.chapters[chapterId],
                    completed: true,
                    completedAt: new Date().toISOString()
                }
            }
        }));
    };

    // Update chapter progress (percentage)
    const updateChapterProgress = (chapterId, percentage) => {
        setProgress(prev => ({
            ...prev,
            chapters: {
                ...prev.chapters,
                [chapterId]: {
                    ...prev.chapters[chapterId],
                    progress: percentage,
                    lastReadAt: new Date().toISOString()
                }
            }
        }));
    };

    // Add bookmark
    const addBookmark = (bookmark) => {
        const newBookmark = {
            id: Date.now(),
            ...bookmark,
            createdAt: new Date().toISOString()
        };
        
        setProgress(prev => ({
            ...prev,
            bookmarks: [...prev.bookmarks, newBookmark]
        }));
    };

    // Remove bookmark
    const removeBookmark = (bookmarkId) => {
        setProgress(prev => ({
            ...prev,
            bookmarks: prev.bookmarks.filter(b => b.id !== bookmarkId)
        }));
    };

    // Add note
    const addNote = (chapterId, sectionId, noteText) => {
        const noteKey = `${chapterId}_${sectionId}`;
        const newNote = {
            text: noteText,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        setProgress(prev => ({
            ...prev,
            notes: {
                ...prev.notes,
                [noteKey]: newNote
            }
        }));
    };

    // Update note
    const updateNote = (chapterId, sectionId, noteText) => {
        const noteKey = `${chapterId}_${sectionId}`;
        setProgress(prev => ({
            ...prev,
            notes: {
                ...prev.notes,
                [noteKey]: {
                    ...prev.notes[noteKey],
                    text: noteText,
                    updatedAt: new Date().toISOString()
                }
            }
        }));
    };

    // Remove note
    const removeNote = (chapterId, sectionId) => {
        const noteKey = `${chapterId}_${sectionId}`;
        setProgress(prev => ({
            ...prev,
            notes: {
                ...prev.notes,
                [noteKey]: undefined
            }
        }));
    };

    // Update reading time
    const updateReadingTime = (minutes) => {
        setProgress(prev => ({
            ...prev,
            readingTime: prev.readingTime + minutes
        }));
    };

    // Get overall progress percentage
    const getOverallProgress = () => {
        const chapterKeys = Object.keys(progress.chapters);
        if (chapterKeys.length === 0) return 0;

        const totalProgress = chapterKeys.reduce((sum, key) => {
            return sum + (progress.chapters[key]?.progress || 0);
        }, 0);

        return Math.round(totalProgress / chapterKeys.length);
    };

    // Export progress data
    const exportProgress = () => {
        const exportData = {
            ...progress,
            exportedAt: new Date().toISOString(),
            version: '1.0'
        };
        return exportData;
    };

    // Import progress data
    const importProgress = (importData) => {
        if (importData && importData.version) {
            setProgress(importData);
            return true;
        }
        return false;
    };

    // Reset all progress
    const resetProgress = () => {
        setProgress({
            chapters: {},
            bookmarks: [],
            notes: {},
            readingTime: 0,
            totalSections: 0,
            completedSections: 0
        });
    };

    const value = {
        progress,
        markChapterCompleted,
        updateChapterProgress,
        addBookmark,
        removeBookmark,
        addNote,
        updateNote,
        removeNote,
        updateReadingTime,
        getOverallProgress,
        exportProgress,
        importProgress,
        resetProgress
    };

    return (
        <ReadingProgressContext.Provider value={value}>
            {children}
        </ReadingProgressContext.Provider>
    );
};