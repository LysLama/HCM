import React from "react";
import "../styles/Section.css";
import section2Image from "../assets/img/theory.jpg";

const Theory = () => {
    return (
        <div className="page-container">
            {/* Phần Hero */}
            <header 
                className="section-hero" 
                style={{ backgroundImage: `url(${section2Image})` }}
            >
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Lý Thuyết Mác – Lênin về Giai Cấp và Đấu Tranh Giai Cấp</h1>
            </header>

            {/* Phần nội dung chính của trang */}
            <main className="section-main-content">
                <div className="content-text">
                    {/* PHẦN I: KHÁI NIỆM CƠ BẢN */}
                    <h3>1. Khái niệm về giai cấp</h3>
                    <p>
                        •	Theo Mác – Lênin: giai cấp là những tập đoàn người to lớn trong xã hội, khác nhau về địa vị trong hệ thống sản xuất, về quan hệ đối với tư liệu sản xuất, vai trò trong tổ chức lao động xã hội và phương thức, khối lượng thu nhập mà họ thu được (Giáo trình Triết học Mác – Lênin, 2019, tr. 181).
                    </p>
                    
                    {/* Trích dẫn định nghĩa chi tiết của Lênin */}
                    <div className="quote-section">
                        <blockquote>
                            <p>
                                "Được gọi là giai cấp, là những tập đoàn người to lớn, khác nhau về địa vị của họ trong một hệ thống sản xuất xã hội nhất định..., về quan hệ của họ đối với những tư liệu sản xuất, về vai trò của họ trong tổ chức lao động xã hội, và do đó khác nhau về cách thức hưởng thụ phần của cải xã hội..."
                            </p>
                            <cite>— V.I. Lênin, <em>Sáng kiến vĩ đại</em></cite>
                        </blockquote>
                    </div>

                    <p>
                        •	<strong>Điều kiện xuất hiện giai cấp:</strong> Sự phân hóa giai cấp xuất hiện khi có chế độ tư hữu và phân công lao động xã hội, đặc biệt là phân công giữa lao động trí óc và lao động chân tay.
                    </p>

                    <h3>2. Đấu tranh giai cấp - Bản chất và đặc điểm</h3>
                    <p>
                        •	<strong>Tính tất yếu:</strong> Đấu tranh giai cấp là tất yếu, do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp (Giáo trình Triết học Mác – Lênin, 2019, tr. 187).
                    </p>
                    <p>
                        •	<strong>Định nghĩa:</strong> Đấu tranh giai cấp là cuộc đấu tranh của các tập đoàn người to lớn có lợi ích căn bản đối lập nhau trong một phương thức sản xuất xã hội nhất định.
                    </p>
                    <p>
                        •	<strong>Thực chất:</strong> Cuộc đấu tranh của quần chúng lao động bị áp bức, bốc lột chống lại giai cấp áp bức, bốc lột nhằm lật đổ ách thống trị của chúng.
                    </p>

                    <h3>3. Các hình thức biểu hiện của đấu tranh giai cấp</h3>
                    <p>Đấu tranh giai cấp biểu hiện ở ba lĩnh vực chính:</p>
                    <ul>
                        <li><strong>Kinh tế:</strong> Tranh chấp về tư liệu sản xuất, điều kiện lao động, phân phối sản phẩm.</li>
                        <li><strong>Chính trị:</strong> Đấu tranh giành, giữ và sử dụng quyền lực nhà nước.</li>
                        <li><strong>Tư tưởng – văn hóa:</strong> Bảo vệ hệ tư tưởng của giai cấp thống trị hoặc phản kháng.</li>
                    </ul>

                    {/* PHẦN II: CÁC NGUYÊN TẮC LÝ THUYẾT CỦA MARX */}
                    <section>
                        <h3>4. Ba điểm then chốt của Marx (1852)</h3>
                        <p>Marx đã tổng kết ba nguyên tắc cơ bản về giai cấp và đấu tranh giai cấp:</p>
                        <ol>
                            <li><strong>Tính lịch sử:</strong> Sự tồn tại của các giai cấp gắn với các giai đoạn phát triển nhất định của sản xuất.</li>
                            <li><strong>Mục tiêu cách mạng:</strong> Đấu tranh giai cấp tất yếu dẫn tới chuyên chính vô sản.</li>
                            <li><strong>Viễn cảnh tương lai:</strong> Chuyên chính vô sản chỉ là bước quá độ đi tới xã hội không còn giai cấp.</li>
                        </ol>
                        <div className="callout info">
                            <strong>Điểm mấu chốt:</strong> Giai cấp là hiện tượng lịch sử; mục tiêu tối hậu không phải là thay một giai cấp thống trị bằng một giai cấp khác, mà là tạo điều kiện để thủ tiêu mọi đối kháng giai cấp.
                        </div>
                    </section>

                    {/* PHẦN III: TRÍCH DẪN KINH ĐIỂN */}
                    <h3>5. Trích dẫn từ các nhà triết học:</h3>
                    <div className="quote-section">
                        <blockquote>
                            <p>"Lịch sử của tất cả các xã hội hiện có cho đến nay là lịch sử của cuộc đấu tranh giai cấp."</p>
                            <cite>— Karl Marx và Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)</cite>
                        </blockquote>
                        
                        <blockquote>
                            <p>"Giai cấp vô sản không có gì để mất ngoài xiềng xích của mình. Họ có cả một thế giới để giành lấy."</p>
                            <cite>— Karl Marx và Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Nhà nước là một bộ máy đặc biệt để trấn áp, là bộ máy để một giai cấp này trấn áp giai cấp khác."</p>
                            <cite>— V.I. Lenin, Nhà nước và cách mạng (1917)</cite>
                        </blockquote>
                    </div>

                    {/* PHẦN VI: TÀI LIỆU THAM KHẢO */}
                    <h3>6. Video học thuật:</h3>
                    <div className="video-section">
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/GL4o_umfVWM" 
                                title="Lý thuyết Nền Tảng - khái niệm giai cấp & đấu tranh giai cấp 1" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Lý thuyết Nền Tảng - khái niệm giai cấp & đấu tranh giai cấp</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/v0PE6y-fybA" 
                                title="Lý thuyết Nền Tảng - khái niệm giai cấp & đấu tranh giai cấp 2" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Phân tích khái niệm giai cấp trong triết học Mác-Lênin</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/rMwMJCqCKhc" 
                                title="Lý thuyết Nền Tảng - khái niệm giai cấp & đấu tranh giai cấp 3" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Đấu tranh giai cấp trong xã hội hiện đại</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/qVr_qV9nRB8" 
                                title="Phân tích định nghĩa giai cấp của Lênin" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Phân tích định nghĩa giai cấp của Lênin và ví dụ minh họa</p>
                        </div>
                    </div>

                    {/* PHẦN IV: GIAI CẤP VÀ DÂN TỘC */}
                    <section>
                        <h3>7. Mối quan hệ giữa giai cấp và dân tộc</h3>
                        <p>
                            •	<strong>Bản chất giai cấp:</strong> Giai cấp là phạm trù kinh tế–xã hội mang tính lịch sử; sự tồn tại của nó gắn với những hệ thống sản xuất dựa trên tư hữu, nhưng không thể giản lược thành thuần kinh tế.
                        </p>
                        <p>
                            •	<strong>Mối liên hệ giai cấp–dân tộc:</strong> Trong những thời đoạn lịch sử nhất định, lợi ích căn bản của các giai cấp lao động quyện chặt với lợi ích dân tộc; từ đó hình thành mặt trận thống nhất, liên minh giai cấp dưới ngọn cờ giải phóng dân tộc và xã hội.
                        </p>
                        <ul>
                            <li><strong>Liên minh chiến lược:</strong> Dựa trên lợi ích căn bản thống nhất, có tính lâu dài.</li>
                            <li><strong>Liên minh sách lược:</strong> Mang tính tạm thời, dựa trên lợi ích trước mắt.</li>
                            <li><strong>Biện chứng:</strong> Đấu tranh giai cấp và liên minh giai cấp là hai mặt của một quá trình tạo sức mạnh lịch sử.</li>
                        </ul>
                    </section>

                    {/* PHẦN V: VÍ DỤ LỊCH SỬ */}
                    <h3>8. Ví dụ thực tiễn trong lịch sử</h3>
                    <p>
                        •	<strong>Cách mạng Pháp 1789:</strong> Cuộc đấu tranh của giai cấp tư sản chống lại quý tộc phong kiến, mở ra kỷ nguyên tư bản chủ nghĩa ở châu Âu.
                    </p>
                    <p>
                        •	<strong>Cách mạng Tháng Mười Nga 1917:</strong> Giai cấp vô sản lật đổ chế độ tư bản, thiết lập nhà nước xã hội chủ nghĩa đầu tiên trên thế giới.
                    </p>
                    <p>
                        •	<strong>Phong trào công nhân thế kỷ 19-20:</strong> Đấu tranh cho quyền lợi của người lao động, giờ làm việc 8 tiếng, bảo hiểm xã hội.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Theory;
