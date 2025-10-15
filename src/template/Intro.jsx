import React, { useEffect, useRef } from 'react';
import '../styles/Intro.css';

const Intro = () => {
    // Tạo một ref để giữ container của các card
    const cardsContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Nếu phần tử đang hiển thị trên màn hình
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Tùy chọn: Ngừng quan sát sau khi đã hiển thị để tiết kiệm tài nguyên
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                // Bắt đầu kích hoạt khi 20% của phần tử hiển thị
                threshold: 0.2,
            }
        );

        // Lấy tất cả các card và bắt đầu quan sát chúng
        const cards = Array.from(cardsContainerRef.current.children).filter(child => child.classList.contains('intro-card'));
        cards.forEach((card) => observer.observe(card));

        // Hàm dọn dẹp: Ngừng quan sát tất cả khi component unmount
        return () => {
            cards.forEach((card) => observer.unobserve(card));
        };
    }, []); // Mảng rỗng đảm bảo effect này chỉ chạy một lần khi component mount

    return (
        <section id="introduction" className="intro-section-container" ref={cardsContainerRef}>
            {/* Tiêu đề phần giới thiệu */}
            <h1 className="intro-section-title">Giới Thiệu Chương 2</h1>

            {/* Các đề mục nhỏ trong các card */}
            <div className="intro-card">
                {/* Tổng quan dự án */}
                <h2>Tổng Quan Nội Dung</h2>
                <div className="intro-section-content">
                    <p>
                        Nội dung chuyển trọng tâm sang <strong>Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường</strong>. Phần I trình bày lý luận của C. Mác về <em>sản xuất hàng hóa và hàng hóa</em>; Phần II giới thiệu về <em>thị trường và nền kinh tế thị trường</em>.
                    </p>
                </div>
            </div>

            {/* Mục tiêu dự án */}
            <div className="intro-card">
                <h2>Mục Tiêu Học Tập</h2>
                <div className="intro-section-content">
                    <ul>
                        <li><strong>Hệ thống hóa kiến thức:</strong> Trang bị nền tảng về hàng hóa, tiền tệ, dịch vụ và các quan hệ trao đổi.</li>
                        <li><strong>Tạo không gian thảo luận mở:</strong> Thảo luận về vai trò của thị trường và những quy luật cơ bản của kinh tế thị trường.</li>
                        <li><strong>Ứng dụng công nghệ vào học thuật:</strong> Sử dụng các công nghệ web hiện đại để tạo ra một trải nghiệm học tập, nghiên cứu trực quan và hấp dẫn hơn so với các phương pháp truyền thống.</li>
                    </ul>
                </div>
            </div>

            {/* Đặc điểm kỹ thuật */}
            <div className="intro-card">
                <h2>Đặc Điểm Kỹ thuật</h2>
                <div className="intro-section-content">
                    <p>
                        Để mang lại một giao diện hiện đại và trải nghiệm người dùng mượt mà, dự án được xây dựng trên nền tảng web tối ưu hiệu năng và có tích hợp trợ lý hỏi đáp học thuật thời gian thực:
                    </p>
                    <ul>
                        <li><strong>React + Vite:</strong> Kết hợp tốc độ phát triển & bundling nhanh.</li>
                        <li><strong>JavaScript (ESNext):</strong> Logic tương tác & tối ưu state.</li>
                        <li><strong>CSS thuần + biến màu:</strong> Kiểm soát chi tiết giao diện, responsive.</li>
                        <li><strong>GSAP:</strong> Hiệu ứng chuyển động tinh tế.</li>
                        <li><strong>AI Chatbot tích hợp:</strong> Hỗ trợ đặt câu hỏi ngay khi đang đọc nội dung (phạm vi triết học), có cache tạm & chế độ dự phòng.</li>
                    </ul>
                </div>
            </div>

            {/* Truy cập nhanh Chương 2 */}
            <div className="intro-card">
                <h2>Truy Cập Nhanh</h2>
                <div className="intro-section-content">
                    <ul>
                        <li><a href="/chapter2/money">1) Tiền tệ</a></li>
                        <li><a href="/chapter2/services">2) Dịch vụ & quan hệ trao đổi</a></li>
                        <li><a href="/chapter2/market-concepts">3) Thị trường: khái niệm & vai trò</a></li>
                        <li><a href="/chapter2/market-economy">4) Nền kinh tế thị trường</a></li>
                        <li><a href="/knowledge">Chương 2 • Trung tâm Tri thức</a></li>
                    </ul>
                </div>
            </div>

            {/* Tuyên bố về việc sử dụng AI */}
            <div className="intro-card">
                <h2>Tuyên Bố Về Việc Sử Dụng AI</h2>
                <div className="intro-section-content">
                    <p>Chúng tôi sử dụng công cụ AI như một phương tiện hỗ trợ sản xuất & tương tác, không thay thế nghiên cứu học thuật.</p>
                    <p><strong>Phạm vi hỗ trợ AI:</strong></p>
                    <ul>
                        <li>Gợi ý cấu trúc & cải thiện diễn đạt không cốt lõi.</li>
                        <li>Hỗ trợ kiểm tra logic code & tối ưu hiệu năng nhỏ.</li>
                        <li>Trợ lý hỏi đáp nội dung triết học thời gian thực cho người dùng.</li>
                    </ul>
                    <p><strong>Tính toàn vẹn học thuật:</strong> Mọi luận điểm, phân tích chuyên sâu và kết luận được xây dựng bởi thành viên nhóm dựa trên nguồn chính thống; AI chỉ cung cấp gợi ý tham khảo.</p>
                </div>
            </div>

            {/* Thành viên đóng góp */}
            <div className="intro-card">
                <h2>Thành viên đóng góp</h2>
                <div className="intro-section-content">
                    {/* Vui lòng cập nhật tên và vai trò của các thành viên trong nhóm của bạn tại đây */}
                    <ul>
                        <li><strong>Minh Khánh</strong> - Trưởng nhóm, Nghiên cứu nội dung chính</li>
                        <li><strong>Thanh Lâm</strong> - Lập trình viên Back-end, Quản lý server, Dựng API</li>
                        <li><strong>Gia Bảo</strong> - Lập trình viên Front-end, Thiết kế giao diện</li>
                        <li><strong>Song Thiên</strong> - Hỗ trợ kỹ thuật, Chỉnh sửa thiết kế, nội dung</li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;