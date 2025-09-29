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
            <h1 className="intro-section-title">Giới Thiệu Dự Án</h1>

            {/* Các đề mục nhỏ trong các card */}
            <div className="intro-card">
                {/* Tổng quan dự án */}
                <h2>Tổng Quan Dự Án</h2>
                <div className="intro-section-content">
                    <p>
                        Dự án <strong>"Đấu Tranh Giai Cấp & Tương Lai Lịch Sử Nhân Loại"</strong> là một nền tảng kiến thức, được phát triển nhằm phục vụ cho mục đích học tập và nghiên cứu. Với câu hỏi trọng tâm: <em>"Nếu không còn đấu tranh giai cấp, lịch sử nhân loại có dừng lại không?"</em>, chúng tôi mong muốn tạo ra một không gian học thuật, nơi mọi người có thể tìm hiểu sâu hơn về một trong những khái niệm cốt lõi của triết học và xã hội học.
                    </p>
                </div>
            </div>

            {/* Mục tiêu dự án */}
            <div className="intro-card">
                <h2>Mục Tiêu Dự Án</h2>
                <div className="intro-section-content">
                    <ul>
                        <li><strong>Hệ thống hóa kiến thức:</strong> Giúp người học, đặc biệt là các bạn sinh viên, có cái nhìn tổng quan và sâu sắc về khái niệm đấu tranh giai cấp theo quan điểm của chủ nghĩa Mác - Lênin.</li>
                        <li><strong>Tạo không gian thảo luận mở:</strong> Khơi gợi tư duy phản biện về vai trò của đấu tranh giai cấp trong sự phát triển của lịch sử và tương lai của xã hội loài người khi không còn giai cấp.</li>
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
                        <li><strong>Lý Thanh Lâm</strong> - Lập trình viên Back-end, Quản lý server, Dựng API</li>
                        <li><strong>Ngô Gia Bảo</strong> - Lập trình viên Front-end, Thiết kế giao diện</li>
                        <li><strong>Nguyễn Thị Kim Phụng</strong> - Biên tập nội dung, Thu thập tài liệu</li>
                        <li><strong>Bùi Gia Huy</strong> - Hỗ trợ kỹ thuật, Chỉnh sửa thiết kế, nội dung</li>
                        <li><strong>Mạnh Hùng</strong> - Thiết kế UI, Hỗ trợ lập trình</li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;