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
                        Để mang lại một giao diện hiện đại và trải nghiệm người dùng mượt mà, dự án của chúng tôi được xây dựng dựa trên các công nghệ tiên tiến:
                    </p>
                    <ul>
                        <li><strong>ReactJS + Vite:</strong></li>
                        <li><strong>JavaScript:</strong> Tăng cường sự chặt chẽ và ổn định cho mã nguồn.</li>
                        <li><strong>CSS:</strong> Xây dựng giao diện nhanh chóng và linh hoạt.</li>
                        <li><strong>GSAP (GreenSock Animation Platform):</strong> Tạo ra các hiệu ứng chuyển động tinh tế và sinh động.</li>
                    </ul>
                </div>
            </div>

            {/* Tuyên bố về việc sử dụng AI */}
            <div className="intro-card">
                <h2>Tuyên Bố Về Việc Sử Dụng AI</h2>
                <div className="intro-section-content">
                    <p>Trong quá trình thực hiện dự án này, chúng tôi đã ứng dụng công nghệ Trí tuệ Nhân tạo như một công cụ hỗ trợ để tối ưu hóa hiệu quả công việc. Chúng tôi cam kết sử dụng AI một cách có trách nhiệm và minh bạch.</p>
                    <br />
                    <p><strong>Mô Hình Ngôn Ngữ Lớn (LLM) Được Sử Dụng:</strong> Chúng tôi đã sử dụng các mô hình ngôn ngữ lớn tiên tiến, bao gồm <strong>Gemini của Google</strong> và các mô hình khác để hỗ trợ trong các khâu khác nhau của dự án.</p>
                    <br />
                    <p><strong>Mục Đích Sử Dụng AI:</strong></p>
                    <ul>
                        <li><strong>Lên ý tưởng và cấu trúc:</strong> AI được dùng để brainstorm các ý tưởng ban đầu, sắp xếp cấu trúc nội dung và đề xuất các hướng tiếp cận cho chủ đề.</li>
                        <li><strong>Tối ưu hóa mã nguồn (Code):</strong> Hỗ trợ viết, gỡ lỗi (debug) và tái cấu trúc (refactor) các đoạn mã cho trang web.</li>
                        <li><strong>Sáng tạo nội dung phụ trợ:</strong> Hỗ trợ viết các nội dung giới thiệu, mô tả và các văn bản không mang tính học thuật cốt lõi.</li>
                    </ul>
                    <br />
                    <p><strong>Nội Dung và Script (Kịch bản):</strong> Chúng tôi xin khẳng định, <strong>toàn bộ nội dung học thuật, các phân tích, luận điểm và kết luận đều do các thành viên trong nhóm tự nghiên cứu</strong> từ các nguồn tài liệu chính thống. AI chỉ đóng vai trò là công cụ hỗ trợ, không can thiệp vào tính chính xác và chiều sâu học thuật của dự án.</p>
                    <p><strong>Tài liệu tham khảo:</strong></p>
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