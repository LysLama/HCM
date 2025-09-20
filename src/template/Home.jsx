import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import các component của bạn
import Hero from '../components/Hero';
import Intro from '../sections/Intro';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Kiểm tra xem URL có hash không (ví dụ: #introduction)
        if (location.hash) {
            // Lấy ID từ hash
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);

            // Nếu tìm thấy phần tử, cuộn đến nó một cách mượt mà
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]); // Chạy lại effect này mỗi khi location thay đổi

    return (
        <>
            <Hero />
            <Intro />
            
        </>
    );
};

export default Home;