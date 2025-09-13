import React, { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi2';
import '../styles/Button.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Hiển thị button khi scroll xuống 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            aria-label="Go to top"
        >
            <HiArrowUp />
        </button>
    );
};

export default ScrollToTopButton;