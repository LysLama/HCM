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
                    {/* PHẦN I: TỔNG KẾT LÝ THUYẾT */}
                    <h3>1. Tóm tắt các điểm chính</h3>
                    <p>
                        •	<strong>Vai trò lịch sử:</strong> Triết học Mác-Lênin khẳng định đấu tranh giai cấp là động lực trực tiếp, cơ bản của lịch sử trong các xã hội có sự phân chia giai cấp. Nó là cơ chế tất yếu để phá vỡ xiềng xích của quan hệ sản xuất cũ, mở đường cho tiến bộ xã hội.
                    </p>
                    <p>
                        •	<strong>Tính lịch sử:</strong> Vai trò động lực này chỉ mang tính lịch sử, gắn liền với "thời tiền sử" của nhân loại, không phải là hiện tượng vĩnh viễn.
                    </p>

                    <h3>2. Viễn cảnh tương lai nhân loại</h3>
                    <p>
                        •	<strong>Không phải kết thúc lịch sử:</strong> Giả định về một xã hội không còn đối kháng giai cấp không có nghĩa là lịch sử sẽ kết thúc. Ngược lại, đó sẽ là một chương mới, một sự khởi đầu thực sự của lịch sử nhân văn.
                    </p>
                    <p>
                        •	<strong>Chuyển hóa động lực:</strong> Động lực phát triển sẽ không mất đi mà chuyển hóa từ những mâu thuẫn đối kháng giữa người với người sang những mâu thuẫn không đối kháng giữa con người với tự nhiên, giữa cái tiến bộ và cái lạc hậu, giữa nhu cầu vô hạn và năng lực hữu hạn.
                    </p>
                    <p>
                        •	<strong>Phương thức mới:</strong> Sự phát triển không còn được thúc đẩy bởi sự thù hận và xung đột, mà bởi sự hợp tác, sáng tạo và khát vọng chinh phục những đỉnh cao mới của toàn thể cộng đồng - một viễn cảnh phát triển bền vững và nhân văn hơn.
                    </p>

                    {/* PHẦN II: TRÍCH DẪN KINH ĐIỂN */}
                    <h3>3. Trích dẫn tổng kết từ các nhà triết học:</h3>
                    <div className="quote-section">
                        <blockquote>
                            <p>"Vương quốc của tự do chỉ bắt đầu từ lúc chấm dứt việc lao động được quyết định bởi nhu cầu và tính toán bên ngoài."</p>
                            <cite>— Karl Marx, Tư bản luận, tập III</cite>
                        </blockquote>
                        
                        <blockquote>
                            <p>"Giai đoạn tiền sử của xã hội loài người sẽ khép lại."</p>
                            <cite>— Karl Marx, Góp phần phê phán kinh tế chính trị học (1859)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người."</p>
                            <cite>— Karl Marx và Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Lịch sử thực sự của nhân loại sẽ chỉ bắt đầu khi con người kiểm soát được điều kiện sống của mình."</p>
                            <cite>— Friedrich Engels, Chủ nghĩa xã hội không tưởng và chủ nghĩa xã hội khoa học</cite>
                        </blockquote>
                    </div>

                    <h3>4. Video tổng kết:</h3>
                    <div className="video-section">
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/qOP2V_np2c0" 
                                title="Marx and the End of History" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Marx và quan niệm về sự kết thúc của lịch sử</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/eU-AkeOyiOQ" 
                                title="The Future of Socialism" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Tương lai của chủ nghĩa xã hội trong thế kỷ 21</p>
                        </div>
                    </div>

                    {/* PHẦN III: Ý NGHĨA VÀ ỨNG DỤNG */}
                    <h3>5. Ý nghĩa đương đại:</h3>
                    <p>
                        • <strong>Đối với việc nghiên cứu lịch sử:</strong> Giúp chúng ta hiểu rõ hơn về các quy luật phát triển xã hội và vai trò của các lực lượng xã hội trong quá trình biến đổi.
                    </p>
                    <p>
                        • <strong>Đối với thực tiễn chính trị:</strong> Cung cấp cơ sở lý thuyết để xây dựng các chính sách xã hội công bằng và phát triển bền vững.
                    </p>
                    <p>
                        • <strong>Đối với tương lai nhân loại:</strong> Định hướng cho việc xây dựng một xã hội hài hòa, nơi mỗi cá nhân được phát triển toàn diện trong khuôn khổ cộng đồng.
                    </p>

                    <h3>6. Thông điệp cuối cùng:</h3>
                    <p>
                        Nghiên cứu về đấu tranh giai cấp không phải để khuyến khích xung đột, mà để hiểu rõ bản chất của các mâu thuẫn xã hội nhằm tìm ra những giải pháp hài hòa và nhân văn hơn. Mục tiêu cuối cùng là xây dựng một thế giới nơi "sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người."
                    </p>

                    {/* PHẦN IV: TÍCH HỢP VÀ ÔN TẬP */}
                    <section>
                        <h3>7. Thông điệp tích hợp: Giai cấp ⟷ Dân tộc ⟷ Tương lai</h3>
                        <p>
                            • Đấu tranh giai cấp vừa là đòn bẩy trực tiếp của biến đổi lịch sử, vừa là quá trình giáo dục–tự giáo dục của chính các lực lượng cách mạng. Khi liên hệ với vấn đề dân tộc, các liên minh dựa trên lợi ích căn bản tạo nên sức mạnh tổng hợp cho giải phóng dân tộc và xã hội.
                        </p>
                        <p>
                            • Mục tiêu tối hậu không dừng ở hoán đổi chủ thể thống trị, mà ở việc giải phóng lực lượng sản xuất và xoá bỏ điều kiện tái sinh đối kháng giai cấp, mở đường cho một chương lịch sử mới của nhân loại.
                        </p>
                        <div className="grid two-cols gap-md">
                            <div className="card">
                                <h4>Ôn tập nhanh</h4>
                                <ul>
                                    <li>Trình bày định nghĩa giai cấp của Lênin bằng chính lời bạn.</li>
                                    <li>Phân biệt liên minh chiến lược và sách lược; cho ví dụ lịch sử.</li>
                                    <li>Vì sao đấu tranh chính trị là hình thức cao nhất?</li>
                                </ul>
                            </div>
                            <div className="card">
                                <h4>Thảo luận mở rộng</h4>
                                <ul>
                                    <li>Nếu lực lượng sản xuất phát triển vượt bậc, những mâu thuẫn "không đối kháng" nào sẽ thành chủ đạo?</li>
                                    <li>Thiết kế một mô-đun quiz 5 câu về ba hình thức đấu tranh và liên minh giai cấp.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* PHẦN V: TRÍCH DẪN KẾT THÚC */}
                    <section className="quote-section">
                        <h3>8. Trích dẫn kết thúc</h3>
                        <blockquote>
                            <p>"Đấu tranh giai cấp là động lực trực tiếp, quan trọng của lịch sử — nhưng không phải động lực duy nhất."</p>
                            <cite>— Tổng hợp từ giáo trình & văn bản kinh điển</cite>
                        </blockquote>
                        <blockquote>
                            <p>"Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển tự do của tất cả mọi người."</p>
                            <cite>— Marx & Engels, <em>Tuyên ngôn</em></cite>
                        </blockquote>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default Conclusion;