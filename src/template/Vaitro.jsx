import React from "react";
import "../styles/Section.css";
import section3Image from "../assets/img/role.jpg";

const Role = () => {
    return (
        <div className="page-container">
            {/* Phần Hero */}
            <header 
                className="section-hero" 
                style={{ backgroundImage: `url(${section3Image})` }}
            >
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Vai Trò Lịch Sử của Đấu Tranh Giai Cấp</h1>
            </header>

            {/* Phần nội dung chính của trang */}
            <main className="section-main-content">
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
                        +	Đấu tranh vô sản – tư sản → dẫn đến sự ra đời của xã hội cộng sản chủ nghĩa.
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

                    {/* PHẦN V: TRÍCH DẪN VÀ VÍ DỤ */}
                    <h3>7. Trích dẫn từ các nhà triết học:</h3>
                    <div className="quote-section">
                        <blockquote>
                            <p>"Triết học chỉ giải thích thế giới theo những cách khác nhau, vấn đề là phải biến đổi nó."</p>
                            <cite>— Karl Marx, Luận cương về Feuerbach (1845)</cite>
                        </blockquote>
                        
                        <blockquote>
                            <p>"Không phải ý thức của con người quyết định sự tồn tại của họ, trái lại, chính sự tồn tại xã hội của họ quyết định ý thức của họ."</p>
                            <cite>— Karl Marx, Góp phần phê phán kinh tế chính trị học (1859)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Cách mạng là lễ hội của người bị áp bức và bị bóc lột."</p>
                            <cite>— V.I. Lenin, Những bài học của cách mạng (1917)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Bạo lực là người đỡ đẻ của mọi xã hội cũ khi mang thai một xã hội mới."</p>
                            <cite>— Karl Marx, Tư bản luận, tập I</cite>
                        </blockquote>
                    </div>

                    <h3>8. Video học thuật:</h3>
                    <div className="video-section">
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/yynYFEp8H6w" 
                                title="Historical Materialism and Class Struggle" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Chủ nghĩa duy vật lịch sử và vai trò của đấu tranh giai cấp</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/CWF_0lkBhjY" 
                                title="The Communist Revolution" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Cách mạng cộng sản và sự thay đổi lịch sử</p>
                        </div>
                    </div>

                    <h3>9. Ví dụ lịch sử cụ thể:</h3>
                    <p>
                        •	<strong>Khởi nghĩa nô lệ Spartacus (73-71 TCN):</strong> Cuộc đấu tranh của nô lệ La Mã chống lại chế độ nô lệ, mặc dù thất bại nhưng đã làm rung chuyển nền móng của đế chế La Mã.
                    </p>
                    <p>
                        •	<strong>Cuộc khởi nghĩa nông dân Đức (1524-1525):</strong> Dẫn đầu bởi Thomas Münzer, đánh dấu sự khởi đầu của cuộc đấu tranh chống chế độ phong kiến ở châu Âu.
                    </p>
                    <p>
                        •	<strong>Commune Paris (1871):</strong> Lần đầu tiên trong lịch sử, giai cấp vô sản nắm quyền chính trị, dù chỉ trong 72 ngày nhưng đã để lại những bài học quý giá cho phong trào cách mạng thế giới.
                    </p>
                    <p>
                        •	<strong>Cách mạng Trung Quốc (1949):</strong> Cuộc đấu tranh của nông dân và công nhân Trung Quốc dưới sự lãnh đạo của Đảng Cộng sản, thành lập nước Cộng hòa Nhân dân Trung Hoa.
                    </p>


                </div>
            </main>
        </div>
    );
};

export default Role;