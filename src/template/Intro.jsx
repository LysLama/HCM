import React, { useEffect, useRef } from 'react';
import '../styles/Intro.css';
import tuyenNgonDocLapAudio from '../assets/audio/Tuyên Ngôn Độc Lập.mp3';
import chucMungMauThanAudio from '../assets/audio/HCM_ChucMungNamMoiMauThan1968.mp3';
import tienQuanCaAudio from '../assets/audio/Tiến quân ca (Văn Cao) - Hợp ca nam nữ - (Quốc ca) (Lời cũ trước năm 1955).mp3';
import tienQuanCaSheetImg from '../assets/img/600259a92f299aaa0c06b7878df163a4.jpg';

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
            <h1 className="intro-section-title">Giới thiệu chủ đề</h1>

            {/* Các đề mục nhỏ trong các card */}
            <div className="intro-card">
                {/* Tổng quan dự án */}
                <h2>Tổng Quan Nội Dung</h2>
                <div className="intro-section-content">
                    <p>
                        Nội dung tập trung vào <strong>Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc</strong>, gồm hai trục chính:
                        <strong> (1) Vai trò</strong> và <strong>(2) Lực lượng – nền tảng</strong> của khối đại đoàn kết.
                    </p>
                    <h3>Tư liệu âm thanh</h3>
                    <ul>
                        <li className="audio-box">
                            <strong>Tuyên Ngôn Độc Lập (02/09/1945)</strong>
                            <audio controls src={tuyenNgonDocLapAudio}>
                                Trình duyệt của bạn không hỗ trợ audio.
                            </audio>
                            <div>
                                Nguồn:{' '}
                                <a href="https://hochiminh.vn/audio/ho-chi-minh-chu-tich-lam-thoi-nuoc-viet-nam-dan-chu-cong-hoa-doc-ban-tuyen-ngon-doc-lap-ngay-2-9-1945-tai-quang-truong-1" target="_blank" rel="noreferrer">
                                    hochiminh.vn
                                </a>
                            </div>
                        </li>
                        <li className="audio-box">
                            <strong>Chúc mừng năm mới Mậu Thân 1968</strong>
                            <audio controls src={chucMungMauThanAudio}>
                                Trình duyệt của bạn không hỗ trợ audio.
                            </audio>
                            <div>
                                Nguồn:{' '}
                                <a href="https://hochiminh.vn/audio/bac-ho-chuc-mung-nam-moi-mau-than-1968-108" target="_blank" rel="noreferrer">
                                    hochiminh.vn
                                </a>
                            </div>
                        </li>
                        <li className="audio-box">
                            <strong>Tiến quân ca (lời cũ trước 1955)</strong>
                            <audio controls src={tienQuanCaAudio}>
                                Trình duyệt của bạn không hỗ trợ audio.
                            </audio>
                            <div>
                                Nguồn:{' '}
                                <a href="https://bcdcnt.net/bai-hat/tien-quan-ca-9133.html" target="_blank" rel="noreferrer">
                                    bcdcnt.net
                                </a>
                            </div>
                            <figure className="audio-figure">
                                <img src={tienQuanCaSheetImg} alt="Bản tờ giấy lời cũ Tiến quân ca năm 1945" />
                                <figcaption>
                                    Bản tờ giấy lời cũ Tiến quân ca năm 1945 do người Mỹ sao chép, ảnh lấy từ 1 diễn đàn trên mạng.
                                </figcaption>
                            </figure>
                        </li>
                    </ul>
                    <div className="quote-section">
                        <blockquote>
                            <p>
                                “Sử dạy cho ta bài học này: Lúc nào dân ta đoàn kết muôn người như một thì nước ta độc lập, tự do. Trái lại lúc nào dân ta không đoàn kết thì bị nước ngoài xâm lấn”.
                            </p>
                            <cite>— Hồ Chí Minh</cite>
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Mục tiêu dự án */}
            <div className="intro-card">
                <h2>Mục Tiêu Học Tập</h2>
                <div className="intro-section-content">
                    <ul>
                        <li><strong>Hiểu đúng luận điểm cốt lõi:</strong> Đại đoàn kết là chiến lược lâu dài, quyết định thành công của cách mạng.</li>
                        <li><strong>Nắm chắc cấu trúc nội dung:</strong> Vai trò → mục tiêu/nhiệm vụ → lực lượng → nền tảng & “hạt nhân”.</li>
                        <li><strong>Liên hệ thực tiễn:</strong> Nhận diện cách củng cố đồng thuận xã hội và phát huy sức mạnh toàn dân trong bối cảnh hiện nay.</li>
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
                        <li><strong>AI Chatbot tích hợp:</strong> Hỗ trợ đặt câu hỏi ngay khi đang đọc nội dung, có cache tạm & chế độ dự phòng.</li>
                    </ul>
                </div>
            </div>

            {/* Truy cập nhanh */}
            <div className="intro-card">
                <h2>Truy Cập Nhanh</h2>
                <div className="intro-section-content">
                    <ul>
                        <li><a href="/overview">Tổng quan nội dung</a></li>
                        <li><a href="/methods">Phương pháp</a></li>
                        <li><a href="/front">Mặt trận</a></li>
                        <li><a href="/resources">Tài liệu</a></li>
                        <li><a href="/quiz">Ôn tập</a></li>
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
                        <li><strong>Mai Nguyễn</strong> - Lập trình viên Front-end, Thiết kế giao diện</li>
                        <li><strong>Hành Phúc</strong> - Hỗ trợ kỹ thuật, Chỉnh sửa thiết kế, nội dung</li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Intro;