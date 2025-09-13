import React from "react";
import "../styles/Section.css";
import section4Image from "../assets/img/section4.jpg";

const Section4 = () => {
    return (
        <section id="xa-hoi-tuong-lai" className="section-container">
            <h2 className="section-title">Khả năng và giới hạn của một xã hội không còn đối kháng giai cấp</h2>
            <div className="section-content">
                <div className="content-image">
                    <img src={section4Image} alt="Khả năng và giới hạn của một xã hội không còn đối kháng giai cấp" />
                </div>
                <div className="content-text">
                    <h3>1. Khả năng: </h3>
                    <p>
                        •	Theo Mác – Lênin, khi xã hội tiến lên chủ nghĩa cộng sản (trong đó giai đoạn đầu là chủ nghĩa xã hội), chế độ tư hữu về tư liệu sản xuất chủ yếu dần bị thủ tiêu. Khi đó, cơ sở kinh tế để phân chia giai cấp đối kháng sẽ không còn (Giáo trình 2019, tr. 190–191).
                    </p>
                    <p>
                        •	Quan hệ xã hội được xây dựng trên cơ sở hợp tác, bình đẳng, đoàn kết, thay thế quan hệ áp bức, bóc lột.
                    </p>
                    <p>
                        •	Đấu tranh giai cấp không còn giữ vai trò động lực trực tiếp, mà lịch sử tiếp tục phát triển nhờ các động lực mới:
                        <br />
                        +	Phát triển lực lượng sản xuất và khoa học – công nghệ.
                        <br />
                        +	Mở rộng và hoàn thiện dân chủ xã hội chủ nghĩa.
                        <br />
                        +	Nâng cao đời sống vật chất và tinh thần của nhân dân.
                        <br />
                        +	Đấu tranh giải quyết những vấn đề chung của nhân loại như hòa bình, môi trường, hợp tác quốc tế (Giáo trình 2019, tr. 197).
                    </p>
                    <h3>2. Giới hạn: </h3>
                    <p>
                        •	Quá trình đi tới xã hội không còn đối kháng giai cấp là lâu dài, phức tạp. Trong thời kỳ quá độ lên chủ nghĩa xã hội, vẫn còn tồn tại sự khác biệt giai cấp, bất bình đẳng, và tàn dư của xã hội cũ (Giáo trình 2019, tr. 194-195).
                    </p>
                    <p>
                        •	Ngay cả trong xã hội cộng sản chủ nghĩa, lịch sử không dừng lại. Xã hội vẫn phát triển, nhưng mâu thuẫn chủ yếu chuyển từ đối kháng giai cấp sang mâu thuẫn mới mang tính xã hội – nhân loại, như: hạn chế về tài nguyên, nhu cầu phân phối công bằng, sự đa dạng văn hóa – tư tưởng (Giáo trình 2019, tr.197).
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section4;