import React from "react";
import "../styles/Section.css";
import conclusionImage from "../assets/img/conclusion.jpg"; // <-- Thay đổi tên tệp ảnh nếu cần

const Conclusion = () => {
    return (
        <div className="page-container">
            {/* Phần Hero */}
            <header 
                className="section-hero" 
                style={{ backgroundImage: `url(${conclusionImage})` }}
            >
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Kết Luận</h1>
            </header>

            {/* Phần nội dung chính của trang */}
            <main className="section-main-content">
                <div className="content-text">
                    <p>
                        • Tóm lại, triết học Mác – Lênin khẳng định đấu tranh giai cấp là động lực trực tiếp, cơ bản của lịch sử trong các xã hội có sự phân chia giai cấp. Nó là cơ chế tất yếu để phá vỡ xiềng xích của quan hệ sản xuất cũ, mở đường cho tiến bộ xã hội. Tuy nhiên, vai trò động lực này chỉ mang tính lịch sử, gắn liền với "thời tiền sử" của nhân loại.
                    </p>
                    <p>
                        • Giả định về một xã hội không còn đối kháng giai cấp không có nghĩa là lịch sử sẽ kết thúc. Ngược lại, đó sẽ là một chương mới, một sự khởi đầu thực sự của lịch sử nhân văn. Động lực phát triển sẽ không mất đi mà chuyển hóa từ những mâu thuẫn đối kháng giữa người với người sang những mâu thuẫn không đối kháng giữa con người với tự nhiên, giữa cái tiến bộ và cái lạc hậu, giữa nhu cầu vô hạn và năng lực hữu hạn. Khi đó, sự phát triển không còn được thúc đẩy bởi sự thù hận và xung đột, mà bởi sự hợp tác, sáng tạo và khát vọng chinh phục những đỉnh cao mới của toàn thể cộng đồng. Đó là một viễn cảnh phát triển bền vững và mang tính người hơn bao giờ hết.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default Conclusion;