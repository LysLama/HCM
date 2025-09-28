import React from "react";
import "../styles/Section.css";
import conclusionImage from "../assets/img/conclusion.jpg";

// Kết luận mới: giữ lại chỉ khối trích dẫn cuối, thay toàn bộ phần phân tích theo cấu trúc mới.
const Conclusion = () => {
    return (
        <div className="page-container">
            <header
                className="section-hero"
                style={{ backgroundImage: `url(${conclusionImage})` }}
            >
                <div className="hero-overlay"></div>
                <h1 className="section-hero-title">Kết luận</h1>
            </header>
            <main className="section-main-content">
                <div className="content-text">
                    {/* 1. Khả năng lịch sử của việc “chấm dứt” đấu tranh giai cấp đối kháng */}
                    <section>
                        <h2>1. Khả năng lịch sử của việc chấm dứt đối kháng giai cấp</h2>
                        <p>
                            Mác – Ăngghen không coi <em>đấu tranh giai cấp</em> là “vĩnh cửu” mà là
                            một hiện tượng lịch sử gắn với những hình thái xã hội có sở hữu tư
                            hữu và sự phân hóa lợi ích căn bản. Khi các điều kiện tái sản sinh
                            đối kháng (chiếm đoạt tư nhân tư liệu sản xuất, lao động bị tha hóa,
                            áp bức chính trị) dần bị triệt tiêu trong một phương thức sản xuất
                            mới, hình thức <strong>đối kháng</strong> của xung đột giai cấp có thể lùi
                            lại nhường chỗ cho những mâu thuẫn <strong>không đối kháng</strong> mang
                            tính phát triển.
                        </p>
                        <ul>
                            <li>
                                <strong>Tiền đề vật chất:</strong> Năng suất lao động đủ cao để bảo đảm
                                mức sống xã hội rộng rãi, giảm khan hiếm tuyệt đối.
                            </li>
                            <li>
                                <strong>Tiền đề xã hội:</strong> Sự mở rộng sở hữu xã hội – cộng đồng đối
                                với tư liệu sản xuất chủ yếu; thu hẹp đặc quyền gắn với sở hữu cá
                                nhân chi phối lao động người khác.
                            </li>
                            <li>
                                <strong>Tiền đề chính trị:</strong> Nhà nước từng bước chuyển hóa chức năng
                                từ công cụ thống trị giai cấp sang thiết chế tổ chức - điều phối lợi
                                ích chung.
                            </li>
                            <li>
                                <strong>Tiền đề văn hóa:</strong> Trình độ phổ cập giáo dục, khoa học, ý thức
                                công dân và năng lực hợp tác sáng tạo được nâng cao rộng rãi.
                            </li>
                        </ul>
                        <p>
                            Khi những tiền đề đó hội tụ, đấu tranh giai cấp không “biến mất” về
                            ký ức lịch sử mà mất đi tính tất yếu như cơ chế thường trực phá vỡ
                            trật tự cũ. Xã hội quá độ mở ra khả năng quản trị mâu thuẫn bằng
                            thương lượng dân chủ, khoa học và pháp quyền xã hội chủ nghĩa.
                        </p>
                    </section>

                    {/* 2. Lịch sử có dừng lại không? */}
                    <section>
                        <h2>2. Lịch sử có dừng lại không?</h2>
                        <p>
                            Giả thuyết về sự phai mờ của đối kháng giai cấp không đồng nghĩa
                            “kết thúc lịch sử”. Trái lại, nó đặt nền cho một <strong>chất</strong> phát triển mới
                            – nơi con người lần đầu tiên tái cấu trúc có ý thức điều kiện tồn tại
                            của mình ở quy mô toàn cầu.
                        </p>
                        <p>Các trục vận động mới có thể nổi bật:</p>
                        <ol>
                            <li>
                                <strong>Con người – Tự nhiên:</strong> Điều chỉnh tuần hoàn vật chất – năng
                                lượng theo chuẩn mực bền vững; khắc phục đứt gãy “trao đổi chất”
                                mà chủ nghĩa tư bản tạo ra.
                            </li>
                            <li>
                                <strong>Tri thức – Sáng tạo:</strong> Mâu thuẫn giữa tiềm năng khoa học – công
                                nghệ và cấu trúc tổ chức xã hội chưa kịp thích ứng về chuẩn mực đạo
                                đức, pháp lý.
                            </li>
                            <li>
                                <strong>Cái tiến bộ – Cái lạc hậu:</strong> Khoảng cách về trình độ phát triển vùng,
                                khu vực, nhóm xã hội; yêu cầu “không ai bị bỏ lại phía sau”.
                            </li>
                            <li>
                                <strong>Nhu cầu vô hạn – Nguồn lực hữu hạn:</strong> Thúc đẩy đổi mới mô hình
                                tiêu dùng, vòng đời sản phẩm và kinh tế tuần hoàn.
                            </li>
                        </ol>
                        <p>
                            Như vậy, lịch sử chuyển pha: từ trọng tâm phá vỡ quan hệ sở hữu đối
                            kháng sang trọng tâm tối ưu hóa tổ chức xã hội - sinh thái - sáng
                            tạo, hướng đến mở rộng năng lực người.
                        </p>
                    </section>

                    {/* 3. Động lực thay thế và cơ chế mới */}
                    <section>
                        <h2>3. Những động lực chuyển hóa</h2>
                        <p>
                            Khi động lực “phủ định” dựa trên đối kháng suy giảm, các động lực
                            mang tính <strong>xây dựng</strong> nổi lên:
                        </p>
                        <ul>
                            <li>
                                <strong>Đổi mới khoa học – công nghệ</strong> như bộ gia tốc năng suất và năng
                                lực giải phóng lao động.
                            </li>
                            <li>
                                <strong>Hợp tác tri thức mở</strong> (mạng lưới nghiên cứu, phần mềm tự do, dữ
                                liệu chia sẻ) rút ngắn chu kỳ hiện thực hóa ý tưởng.
                            </li>
                            <li>
                                <strong>Nâng cao chất lượng sống</strong>: y tế dự phòng, giáo dục suốt đời,
                                chăm sóc tinh thần thúc đẩy tái sản xuất mở rộng “vốn con người”.
                            </li>
                            <li>
                                <strong>Động cơ trách nhiệm hệ hành tinh</strong>: khí hậu, đa dạng sinh học,
                                an ninh sinh thái trở thành chuẩn đánh giá phát triển.
                            </li>
                            <li>
                                <strong>Sáng tạo văn hóa – thẩm mỹ</strong>: mở rộng không gian ý nghĩa, bản
                                sắc, thúc đẩy gắn kết xã hội phi cưỡng bức.
                            </li>
                        </ul>
                        <p>
                            Các động lực mới này không loại bỏ mâu thuẫn mà tái cấu hình chúng
                            dưới dạng những “bài toán” cần giải quyết cộng tác, giảm chi phí xã
                            hội của xung đột đối kháng.
                        </p>
                    </section>

                    {/* 4. Hệ quả phương pháp luận */}
                    <section>
                        <h2>4. Hệ quả phương pháp luận hiện nay</h2>
                        <ul>
                            <li>
                                <strong>Nghiên cứu:</strong> Cần mô hình hóa đồng thời các mâu thuẫn kinh tế –
                                sinh thái – tri thức để thấy cấu trúc động mới.
                            </li>
                            <li>
                                <strong>Chính sách:</strong> Thiết kế cơ chế phân bổ dựa trên dữ liệu – minh
                                bạch – đồng kiến tạo thay vì thuần áp đặt hành chính.
                            </li>
                            <li>
                                <strong>Giáo dục chính trị:</strong> Chuyển trọng tâm từ tuyên truyền một
                                chiều sang nâng năng lực phản biện, tham gia và đồng thiết kế thể
                                chế.
                            </li>
                            <li>
                                <strong>Liên minh xã hội:</strong> Mở rộng từ giai cấp công nhân – nông dân
                                sang các tầng lớp tri thức, kỹ trị, lao động sáng tạo trong nền kinh
                                tế số – xanh.
                            </li>
                        </ul>
                    </section>

                    {/* 5. Mâu thuẫn mới sau khi giai cấp biến mất */}
                    <section>
                        <h2>5. Những mâu thuẫn chuyển hóa sau khi giai cấp biến mất</h2>
                        <p>
                            Sau khi các giai cấp đối kháng bị xóa bỏ, mâu thuẫn xã hội không mất đi,
                            mà chuyển hóa thành những hình thức mới mang tính không đối kháng –
                            trở thành động lực phát triển lịch sử ở trình độ cao hơn.
                        </p>
                        <p>Các trục mâu thuẫn tiêu biểu:</p>
                        <ul>
                            <li><strong>Con người ↔ Tự nhiên:</strong> Tổ chức lại quan hệ trao đổi vật chất – năng lượng trên nền tảng bền vững.</li>
                            <li><strong>Cá nhân ↔ Cộng đồng:</strong> Hài hòa hóa tự do sáng tạo và trách nhiệm xã hội.</li>
                            <li><strong>Khoa học – công nghệ ↔ Xã hội – đạo đức:</strong> Điều tiết việc ứng dụng thành tựu mới theo chuẩn mực nhân văn.</li>
                            <li><strong>Quốc gia – dân tộc ↔ Toàn cầu hóa:</strong> Phối hợp lợi ích phát triển với nghĩa vụ chung trước các vấn đề toàn cầu.</li>
                            <li><strong>Vật chất ↔ Tinh thần trong mỗi cá nhân:</strong> Cân bằng nhu cầu vật chất, đời sống tinh thần, ý nghĩa và bản sắc.</li>
                        </ul>
                        <p>
                            Chính những mâu thuẫn này thay thế vai trò lịch sử trước kia của đấu tranh giai cấp đối kháng,
                            định hình các động lực hợp tác – sáng tạo – điều chỉnh mới của tiến bộ xã hội.
                        </p>
                    </section>

                    {/* 6. Thông điệp tổng hợp */}
                    <section>
                        <h2>6. Thông điệp tổng hợp</h2>
                        <p>
                            Mục tiêu không phải duy trì trạng thái “đấu tranh vì đấu tranh”, mà
                            là tạo điều kiện xã hội nơi năng lực mỗi cá nhân được phát triển tự
                            do trong sự phát triển tự do của tất cả. Đấu tranh giai cấp – trong
                            hình thái đối kháng – là giai đoạn lịch sử cần thiết nhưng hữu hạn
                            để mở khóa bước nhảy chất này.
                        </p>
                    </section>

                    {/* 7. Khối trích dẫn giữ lại (nguyên bản) */}
                    <section className="quote-section">
                        <h2>7. Trích dẫn kết thúc</h2>
                        <blockquote>
                            <p>
                                "Đấu tranh giai cấp là động lực trực tiếp, quan trọng của lịch sử
                                — nhưng không phải động lực duy nhất."
                            </p>
                            <cite>— Tổng hợp từ giáo trình & văn bản kinh điển</cite>
                        </blockquote>
                        <blockquote>
                            <p>
                                "Sự phát triển tự do của mỗi người là điều kiện cho sự phát triển
                                tự do của tất cả mọi người."
                            </p>
                            <cite>
                                — Marx & Engels, <em>Tuyên ngôn</em>
                            </cite>
                        </blockquote>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Conclusion;
