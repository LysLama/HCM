import React from 'react';
import '../styles/Intro.css';
import questionImage from '../assets/img/question.jpg';

const Intro = () => {
    return (
        <section id="dat-van-de" className="intro-section-container">
            <h2 className="intro-section-title">Đặt vấn đề</h2>
            <div className="intro-section-content">
                <div className="intro-content-text">
                    <p>
                        Trong "Tuyên ngôn của Đảng Cộng sản", Karl Marx và Friedrich Engels đã đưa ra một trong những luận điểm nền tảng và gây ảnh hưởng sâu rộng nhất: "Lịch sử tất cả các xã hội tồn tại từ trước đến nay chỉ là lịch sử đấu tranh giai cấp". Luận điểm này khẳng định rằng mâu thuẫn và xung đột giữa các giai cấp đối kháng, mà cốt lõi là mâu thuẫn về lợi ích kinh tế, chính là động lực trực tiếp và mạnh mẽ nhất thúc đẩy xã hội loài người vận động qua các hình thái kinh tế - xã hội khác nhau. Tuy nhiên, điều này làm nảy sinh một câu hỏi kiến tạo mang tính giả định nhưng vô cùng sâu sắc: Nếu con người có thể xây dựng thành công một xã hội không còn giai cấp, không còn đối kháng, liệu lịch sử có đi vào bế tắc? Khi động lực trung tâm là đấu tranh giai cấp không còn nữa, lịch sử sẽ dừng lại, mất đi sức sống, hay một hình thái động lực mới sẽ xuất hiện để thay thế và tiếp tục thúc đẩy nền văn minh nhân loại?
                    </p>
                </div>
                <div className="intro-content-image">
                    <img src={questionImage} alt="Đặt vấn đề" />
                </div>
            </div>
        </section>
    );
};

export default Intro;