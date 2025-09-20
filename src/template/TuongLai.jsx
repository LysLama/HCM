import React from "react";
import "../styles/Section.css";
import section4Image from "../assets/img/future.jpg";

const Future = () => {
    return (
        <div className="page-container">
            {/* Phần Hero */}
            <header 
                className="section-hero" 
                style={{ backgroundImage: `url(${section4Image})` }}
            >
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Khả năng và giới hạn của một xã hội không còn đối kháng giai cấp</h1>
            </header>

            {/* Phần nội dung chính của trang */}
            <main className="section-main-content">
                <div className="content-text">
                    <h3>1. Khả năng: </h3>
                    <p>
                        •	Theo Mác – Lênin, khi xã hội tiến lên chủ nghĩa cộng sản (trong đó giai đoạn đầu là chủ nghĩa xã hội), chế độ tư hữu về tư liệu sản xuất chủ yếu dần bị thủ tiêu. Khi đó, cơ sở kinh tế để phân chia giai cấp đối kháng sẽ không còn (<a href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20(K)%20Tr131-Tr229.pdf">Giáo trình Triết học Mác – Lênin, 2019, tr. 190–191</a>).
                    </p>
                    <p>
                        •	Quan hệ xã hội được xây dựng trên cơ sở hợp tác, bình đẳng, đoàn kết, thay thế quan hệ áp bức, bóc lột.
                    </p>
                    <p>
                        •	Đấu tranh giai cấp không còn giữ vai trò động lực trực tiếp, mà lịch sử tiếp tục phát triển nhờ các động lực mới:
                        <br />
                        +	Phát triển lực lượng sản xuất và khoa học – công nghệ.
                        <br />
                        +	Giải quyết mâu thuẫn giữa con người với tự nhiên.
                        <br />
                        +	Giải quyết mâu thuẫn giữa cái mới, tiến bộ và cái cũ, lạc hậu.
                    </p>
                    <h3>2. Giới hạn và những thách thức mới: </h3>
                    <p>
                        •	Sự xóa bỏ giai cấp không diễn ra ngay lập tức mà là một quá trình lâu dài, phức tạp.
                    </p>
                    <p>
                        •	Mâu thuẫn vẫn tồn tại, nhưng chuyển từ mâu thuẫn đối kháng sang mâu thuẫn không đối kháng (ví dụ: mâu thuẫn giữa nhu cầu vật chất, tinh thần ngày càng tăng của con người với trình độ sản xuất còn hạn chế).
                    </p>
                    <p>
                        •	Lịch sử không dừng lại mà bước sang một giai đoạn phát triển mới, nhân văn hơn, nơi động lực không còn là sự xung đột mà là sự hợp tác và sáng tạo.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Future;