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
                    {/* PHẦN I: ĐIỀU KIỆN VÀ KHẢ NĂNG */}
                    <h3>1. Điều kiện để xã hội không còn đối kháng giai cấp</h3>
                    <p>
                        •	<strong>Cơ sở kinh tế:</strong> Theo Mác-Lênin, khi xã hội tiến lên chủ nghĩa cộng sản (giai đoạn đầu là chủ nghĩa xã hội), chế độ tư hữu về tư liệu sản xuất chủ yếu dần bị thủ tiêu. Khi đó, cơ sở kinh tế để phân chia giai cấp đối kháng sẽ không còn (<span className="citation"></span>).
                    </p>
                    <p>
                        •	<strong>Quan hệ xã hội mới:</strong> Quan hệ xã hội được xây dựng trên cơ sở hợp tác, bình đẳng, đoàn kết, thay thế quan hệ áp bức, bóc lột.
                    </p>

                    <h3>2. Các mô hình xã hội tương lai</h3>
                    <p>
                        •	<strong>Giai đoạn xã hội chủ nghĩa:</strong> "Từ mỗi người theo khả năng, cho mỗi người theo lao động" - Còn tồn tại sự khác biệt về thu nhập dựa trên năng suất lao động.
                    </p>
                    <p>
                        •	<strong>Giai đoạn cộng sản chủ nghĩa:</strong> "Từ mỗi người theo khả năng, cho mỗi người theo nhu cầu" - Sản xuất phong phú, mọi người được đáp ứng đầy đủ nhu cầu vật chất và tinh thần.
                    </p>

                    {/* PHẦN II: ĐỘNG LỰC MỚI CỦA LỊCH SỬ */}
                    <h3>3. Động lực phát triển mới trong xã hội không đối kháng</h3>
                    <p>
                        •	<strong>Thay đổi động lực:</strong> Đấu tranh giai cấp không còn giữ vai trò động lực trực tiếp, mà lịch sử tiếp tục phát triển nhờ các động lực mới:
                    </p>
                    <ul>
                        <li><strong>Phát triển lực lượng sản xuất:</strong> Khoa học-công nghệ trở thành động lực chính.</li>
                        <li><strong>Mâu thuẫn con người-tự nhiên:</strong> Giải quyết các vấn đề môi trường, tài nguyên.</li>
                        <li><strong>Mâu thuẫn mới-cũ:</strong> Đổi mới sáng tạo chống lại bảo thủ, lạc hậu.</li>
                        <li><strong>Mâu thuẫn nhu cầu-khả năng:</strong> Nhu cầu vô hạn với nguồn lực hữu hạn.</li>
                    </ul>

                    {/* PHẦN III: CƠ CHẾ CHUYỂN TIẾP */}
                    <section>
                        <h3>4. Cơ chế chuyển tiếp từ đối kháng sang không đối kháng</h3>
                        <ul>
                            <li><strong>Chuyên chính vô sản:</strong> Như <em>bước quá độ</em> nhằm thủ tiêu cơ sở tái sinh giai cấp bóc lột.</li>
                            <li><strong>Phát triển toàn diện:</strong> Ưu tiên phát triển lực lượng sản xuất và thiết chế dân chủ xã hội chủ nghĩa, nâng cao dân trí.</li>
                            <li><strong>Đấu tranh tiếp tục:</strong> Tiếp tục đấu tranh trên ba mặt trận kinh tế, chính trị, tư tưởng phù hợp điều kiện mới.</li>
                        </ul>
                    </section>

                    <h3>5. Thách thức và giới hạn</h3>
                    <p>
                        •	<strong>Quá trình lâu dài:</strong> Sự xóa bỏ giai cấp không diễn ra ngay lập tức mà là một quá trình lâu dài, phức tạp.
                    </p>
                    <p>
                        •	<strong>Mâu thuẫn mới:</strong> Mâu thuẫn vẫn tồn tại, nhưng chuyển từ mâu thuẫn đối kháng sang mâu thuẫn không đối kháng (ví dụ: mâu thuẫn giữa nhu cầu vật chất, tinh thần ngày càng tăng của con người với trình độ sản xuất còn hạn chế).
                    </p>

                    {/* PHẦN IV: VIỄN CẢNH TƯƠNG LAI */}
                    <section>
                        <h3>6. Lịch sử sau khi đối kháng giai cấp chấm dứt</h3>
                        <p>
                            •	<strong>Không phải kết thúc lịch sử:</strong> Đấu tranh giai cấp không phải hiện tượng vĩnh viễn; khi cơ sở kinh tế của đối kháng bị thủ tiêu, lịch sử không dừng lại mà chuyển động bởi các mâu thuẫn <em>không đối kháng</em> và bởi sáng tạo hợp tác của cộng đồng.
                        </p>
                        <div className="callout success">
                            <strong>Viễn cảnh:</strong> "thời tiền sử" khép lại; con người làm chủ điều kiện sống của chính mình, mở ra kỉ nguyên nhân văn hơn về mục tiêu và phương thức phát triển.
                        </div>
                        <p>
                            •	<strong>Động lực mới:</strong> Lịch sử bước sang một giai đoạn phát triển mới, nhân văn hơn, nơi động lực không còn là sự xung đột mà là sự hợp tác và sáng tạo.
                        </p>
                    </section>

                    {/* PHẦN V: TÀI LIỆU THAM KHẢO */}
                    <h3>7. Trích dẫn từ các nhà triết học:</h3>
                    <div className="quote-section">
                        <blockquote>
                            <p>"Trong xã hội cộng sản, nơi không ai có một lĩnh vực hoạt động riêng biệt mà ai cũng có thể hoàn thiện mình trong bất cứ ngành nào mình muốn."</p>
                            <cite>— Karl Marx và Friedrich Engels, Hệ tư tưởng Đức (1845)</cite>
                        </blockquote>
                        
                        <blockquote>
                            <p>"Từ mỗi người theo khả năng của mình, cho mỗi người theo nhu cầu của mình."</p>
                            <cite>— Karl Marx, Phê phán cương lĩnh Gotha (1875)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Khi nhà nước cuối cùng thực sự trở thành đại diện của toàn xã hội, thì chính việc đó làm cho nhà nước trở thành thừa thãi."</p>
                            <cite>— Friedrich Engels, Chủ nghĩa xã hội không tưởng và chủ nghĩa xã hội khoa học (1880)</cite>
                        </blockquote>

                        <blockquote>
                            <p>"Giai cấp vô sản sẽ sử dụng quyền thống trị chính trị của mình để dần dần tước đoạt tất cả tư bản khỏi tầng lớp tư sản."</p>
                            <cite>— Karl Marx và Friedrich Engels, Tuyên ngôn của Đảng Cộng sản (1848)</cite>
                        </blockquote>
                    </div>

                    <h3>8. Video học thuật:</h3>
                    <div className="video-section">
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/vEVTFCI59c8" 
                                title="Xã Hội Tương Lai - khả năng & giới hạn của xã hội không còn đối kháng giai cấp 1" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Khả năng của xã hội không còn đối kháng giai cấp</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/Z9VYY6vxkFA" 
                                title="Xã Hội Tương Lai - khả năng & giới hạn của xã hội không còn đối kháng giai cấp 2" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Mô hình xã hội không còn đối kháng giai cấp</p>
                        </div>
                        
                        <div className="video-container">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/IdQ-To9Xgm8" 
                                title="Xã Hội Tương Lai - khả năng & giới hạn của xã hội không còn đối kháng giai cấp 3" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                            <p className="video-caption">Giới hạn của xã hội không còn đối kháng giai cấp</p>
                        </div>
                    </div>

                    <h3>9. Ví dụ về các nỗ lực xây dựng xã hội mới:</h3>
                    <p>
                        •	<strong>Giai đoạn xã hội chủ nghĩa:</strong> "Từ mỗi người theo khả năng, cho mỗi người theo lao động" - Còn tồn tại sự khác biệt về thu nhập dựa trên năng suất lao động.
                    </p>
                    <p>
                        •	<strong>Giai đoạn cộng sản chủ nghĩa:</strong> "Từ mỗi người theo khả năng, cho mỗi người theo nhu cầu" - Sản xuất phong phú, mọi người được đáp ứng đầy đủ nhu cầu vật chất và tinh thần.
                    </p>
                    <p>
                        •	<strong>Đặc điểm của xã hội không giai cấp:</strong>
                        <br />
                        +	Sở hữu công cộng về tư liệu sản xuất
                        <br />
                        +	Không có sự bóc lột con người bởi con người
                        <br />
                        +	Sự phát triển toàn diện và tự do của mỗi cá nhân
                        <br />
                        +	Hợp tác quốc tế thay thế cạnh tranh thù địch
                    </p>

                    <h3>10. Ví dụ về các nỗ lực xây dựng xã hội mới:</h3>
                    <p>
                        •	<strong>Liên Xô (1922-1991):</strong> Thí nghiệm đầu tiên xây dựng xã hội xã hội chủ nghĩa trên quy mô lớn, đạt được nhiều thành tựu về công nghiệp hóa và giáo dục.
                    </p>
                    <p>
                        •	<strong>Trung Quốc hiện đại:</strong> Mô hình "xã hội chủ nghĩa thị trường" kết hợp giữa kế hoạch hóa nhà nước và cơ chế thị trường.
                    </p>
                    <p>
                        •	<strong>Cuba:</strong> Duy trì hệ thống y tế và giáo dục miễn phí cho toàn dân dù trong điều kiện cấm vận.
                    </p>

                    {/* NEW: History beyond antagonism */}
                    <section>
                        <h3>11. Lịch sử sau khi đối kháng giai cấp chấm dứt</h3>
                        <p>
                            • Đấu tranh giai cấp không phải hiện tượng vĩnh viễn; khi cơ sở kinh tế của đối kháng bị thủ tiêu, lịch sử không dừng lại mà chuyển động bởi các mâu thuẫn <em>không đối kháng</em> (con người–tự nhiên, cái mới–cái cũ, nhu cầu vô hạn–nguồn lực hữu hạn) và bởi sáng tạo hợp tác của cộng đồng.
                        </p>
                        <div className="callout success">
                            <strong>Viễn cảnh:</strong> "thời tiền sử" khép lại; con người làm chủ điều kiện sống của chính mình, mở ra kỉ nguyên nhân văn hơn về mục tiêu và phương thức phát triển.
                        </div>
                    </section>

                    {/* NEW: Transition mechanics */}
                    <section>
                        <h3>12. Cơ chế chuyển tiếp: từ đối kháng → không đối kháng</h3>
                        <ul>
                            <li>Chuyên chính vô sản như <em>bước quá độ</em> nhằm thủ tiêu cơ sở tái sinh giai cấp bóc lột.</li>
                            <li>Ưu tiên phát triển lực lượng sản xuất và thiết chế dân chủ xã hội chủ nghĩa, nâng cao dân trí.</li>
                            <li>Tiếp tục đấu tranh trên ba mặt trận: kinh tế, chính trị, tư tưởng phù hợp điều kiện mới.</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Future;
