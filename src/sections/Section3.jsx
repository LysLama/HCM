import React from "react";
import "../styles/Section.css";
import section3Image from "../assets/img/section3.jpg";

const Section3 = () => {
    return (
        <section id="vai-tro-lich-su" className="section-container">
            <h2 className="section-title">Vai Trò Lịch Sử của Đấu Tranh Giai Cấp</h2>
            <div className="section-content">
                <div className="content-image">
                    <img src={section3Image} alt="Vai Trò Lịch Sử của Đấu Tranh Giai Cấp" />
                </div>
                <div className="content-text">
                    <h3>1. Động lực phát triển của lịch sử xã hội có giai cấp: </h3>
                    <p>
                        •	Mác và Ăngghen khẳng định: “Lịch sử của tất cả các xã hội từ trước tới nay là lịch sử đấu tranh giai cấp” (Tuyên ngôn của Đảng Cộng sản, 1848, <a href="https://marxists.org">Marxists.org</a>).
                    </p>
                    <p>
                        •	Đấu tranh giai cấp là động lực trực tiếp thúc đẩy sự thay thế các hình thái kinh tế – xã hội. Ví dụ:
                        <br />
                        +	Đấu tranh nô lệ – chủ nô → suy vong xã hội chiếm hữu nô lệ.
                        <br />
                        +	Đấu tranh nông dân – địa chủ phong kiến → làm tan rã chế độ phong kiến.
                        <br />
                        +	Đấu tranh vô sản – tư sản → mở đường cho chủ nghĩa xã hội.
                    </p>
                    <h3>2. Tác động hai mặt: </h3>
                    <p>
                        •	Tích cực: Thúc đẩy tiến bộ xã hội, mở đường cho hình thái kinh tế – xã hội cao hơn (<a href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20(K)%20Tr131-Tr229.pdf">Giáo trình Triết học Mác – Lênin, 2019, tr. 189</a>).
                    </p>
                    <p>
                        •	Tiêu cực: gắn liền với xung đột, chiến tranh, sự hy sinh, đau khổ của nhân loại.
                    </p>
                    <h3>3. Tổng quát: </h3>
                    <p>Trong các xã hội có đối kháng giai cấp, đấu tranh giai cấp là động lực trực tiếp của lịch sử. Tuy nhiên, đó không phải là động lực duy nhất. Bên cạnh nó, còn có sự phát triển của lực lượng sản xuất, tiến bộ khoa học – kỹ thuật và nhu cầu hợp tác, giao lưu xã hội cũng góp phần quan trọng vào sự phát triển lịch sử (<a href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20(K)%20Tr131-Tr229.pdf">Giáo trình Triết học Mác – Lênin, 2019, tr. 190</a>).
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section3;