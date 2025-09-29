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
                        {/* Điều kiện / Nguyên nhân sinh ra giai cấp (thay thế theo yêu cầu) */}
                        <h3>2. Điều kiện/Nguyên nhân sinh ra giai cấp</h3>
                        <ul className="bullet-list">
                            <li><strong>Nguyên nhân sâu xa:</strong> Xuất hiện <strong>sản phẩm dư thừa</strong> do năng suất lao động tăng → có khả năng <strong>chiếm đoạt</strong> phần dư.</li>
                            <li><strong>Nguyên nhân trực tiếp:</strong> <strong>Chế độ tư hữu về tư liệu sản xuất</strong> được xác lập → phân hoá lợi ích, hình thành các giai cấp đối lập.</li>
                        </ul>
                        <div className="note-block">
                            <blockquote>
                                <p><strong>Lưu ý:</strong> <strong>Phân công lao động xã hội</strong> (đặc biệt trí óc – chân tay) là yếu tố <strong>thúc đẩy</strong> sự phân hoá nhưng <em>không</em> phải nguyên nhân quyết định.</p>
                            </blockquote>
                        </div>

                        <h3>3. Phân loại giai cấp</h3>
                        <ul className="bullet-list">
                            <li><strong>Giai cấp cơ bản:</strong> Quy định mâu thuẫn cơ bản của <strong>một hình thái kinh tế–xã hội</strong>, gắn trực tiếp với <strong>quan hệ sở hữu</strong> và <strong>địa vị</strong> trong sản xuất.</li>
                            <li><strong>Giai cấp không cơ bản (trung gian):</strong> Tầng lớp ở <strong>giữa</strong>, không quyết định mâu thuẫn cơ bản nhưng có ảnh hưởng xã hội–chính trị nhất định.</li>
                        </ul>

                        <h4>Ví dụ theo các hình thái</h4>
                        <div className="responsive-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Hình thái</th>
                                        <th>Giai cấp <strong>cơ bản</strong></th>
                                        <th>Giai cấp <strong>không cơ bản / trung gian</strong> (ví dụ)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><strong>Chiếm hữu nô lệ</strong></td>
                                        <td><strong>Chủ nô ↔ Nô lệ</strong></td>
                                        <td>Thợ thủ công tự do, thương nhân</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Phong kiến</strong></td>
                                        <td><strong>Địa chủ/Lãnh chúa ↔ Nông dân lệ thuộc</strong></td>
                                        <td>Thợ thủ công, thương nhân, quan lại, tăng lữ, trí thức</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Tư bản chủ nghĩa</strong></td>
                                        <td><strong>Tư sản ↔ Vô sản (công nhân làm thuê)</strong></td>
                                        <td>Tiểu tư sản, nông dân, chủ nhỏ, viên chức, trí thức</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Thời kỳ quá độ lên CNXH</strong></td>
                                        <td><strong>Công nhân ↔ Nông dân</strong> <em>(không đối kháng)</em></td>
                                        <td>Trí thức và các tầng lớp lao động khác</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>4. Liên minh giai cấp</h3>
                        <ul className="bullet-list">
                            <li><strong>Khái niệm:</strong> Sự phối hợp hành động giữa các giai cấp/tầng lớp có <strong>lợi ích căn bản tương đồng</strong> trong một giai đoạn lịch sử.</li>
                            <li><strong>Mục tiêu:</strong> Tập hợp lực lượng để <strong>giải quyết mâu thuẫn cơ bản</strong> (lật đổ giai cấp thống trị cũ, xây dựng chế độ mới; trong CNXH là xây dựng và bảo vệ chế độ).</li>
                            <li><strong>Nguyên tắc:</strong> Cùng mục tiêu chung; tôn trọng lợi ích chính đáng của các bên; <strong>hạt nhân lãnh đạo là giai cấp công nhân</strong>; linh hoạt theo từng thời kỳ.</li>
                            <li><strong>Ví dụ tiêu biểu:</strong> <strong>Liên minh công–nông–trí</strong> (nền tảng chính trị của nhà nước xã hội chủ nghĩa); mặt trận dân tộc thống nhất trong cách mạng dân tộc–dân chủ.</li>
                        </ul>
                    </p>

                    <h3>5. Đấu tranh giai cấp - Bản chất và đặc điểm</h3>
                    <p>
                        •	<strong>Tính tất yếu:</strong> Đấu tranh giai cấp là tất yếu, do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp (Giáo trình Triết học Mác – Lênin, 2019, tr. 187).
                    </p>
                    <p>
                        •	<strong>Định nghĩa:</strong> Đấu tranh giai cấp là cuộc đấu tranh của các tập đoàn người to lớn có lợi ích căn bản đối lập nhau trong một phương thức sản xuất xã hội nhất định.
                    </p>
                    <p>
                        •	<strong>Thực chất:</strong> Cuộc đấu tranh của quần chúng lao động bị áp bức, bốc lột chống lại giai cấp áp bức, bốc lột nhằm lật đổ ách thống trị của chúng.
                    </p>

                    <h3>6. Các hình thức biểu hiện của đấu tranh giai cấp</h3>
                    <p>Đấu tranh giai cấp biểu hiện ở ba lĩnh vực chính:</p>
                    <ul>
                        <li><strong>Kinh tế:</strong> Tranh chấp về tư liệu sản xuất, điều kiện lao động, phân phối sản phẩm.</li>
                        <li><strong>Chính trị:</strong> Đấu tranh giành, giữ và sử dụng quyền lực nhà nước.</li>
                        <li><strong>Tư tưởng – văn hóa:</strong> Bảo vệ hệ tư tưởng của giai cấp thống trị hoặc phản kháng.</li>
                    </ul>

                    {/* PHẦN II: CÁC NGUYÊN TẮC LÝ THUYẾT CỦA MARX */}
                    <section>
                        <h3>7. Ba điểm then chốt của Marx (1852)</h3>
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
                    <h3>8. Trích dẫn từ các nhà triết học:</h3>
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

                    {/* PHẦN IV: TÀI LIỆU THAM KHẢO */}
                    <h3>9. Video học thuật:</h3>
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

                    {/* PHẦN V: VÍ DỤ LỊCH SỬ */}
                    <h3>10. Ví dụ thực tiễn trong lịch sử</h3>
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
