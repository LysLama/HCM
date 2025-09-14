import React from "react";
import "../styles/Section.css";
import section2Image from "../assets/img/section2.jpg";

const Section2 = () => {
    return (
        <section id="ly-thuyet-nen-tang" className="section-container">
            <h2 className="section-title">Lý Thuyết Mác – Lênin về Giai Cấp và Đấu Tranh Giai Cấp</h2>
            <div className="section-content">
                <div className="content-image">
                    <img src={section2Image} alt="Lãnh tụ V.I.Lênin trực tiếp lãnh đạo nhân dân Nga thực hiện thành công Cách mạng tháng Mười năm 1917" />
                </div>
                <div className="content-text">

                    <h3>1. Khái niệm về giai cấp: </h3>
                    <p>
                        •	Mác – Lênin cho rằng: giai cấp là những tập đoàn người to lớn trong xã hội, khác nhau về địa vị trong hệ thống sản xuất, về quan hệ đối với tư liệu sản xuất, vai trò trong tổ chức lao động xã hội và phương thức, khối lượng thu nhập mà họ thu được (<a href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20(K)%20Tr131-Tr229.pdf">Giáo trình Triết học Mác – Lênin, 2019, tr. 181</a>).
                    </p>
                    <p>
                        •	Sự phân hóa giai cấp xuất hiện khi có chế độ tư hữu và phân công lao động xã hội, đặc biệt là phân công giữa lao động trí óc và lao động chân tay.
                    </p>
                    <h3>2. Đấu tranh giai cấp: </h3>
                    <p>
                        •	Là tất yếu, do sự đối lập về lợi ích căn bản không thể điều hòa được giữa các giai cấp. (<a href="https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/2729/GT%20h%E1%BB%8Dc%20ph%E1%BA%A7n%20Tri%E1%BA%BFt%20h%E1%BB%8Dc%20MLN%20(K)%20Tr131-Tr229.pdf">Giáo trình Triết học Mác – Lênin, 2019, tr. 187</a>).
                    </p>
                    <p>
                        •	Đấu tranh giai cấp là cuộc đấu tranh của các tập đoàn người to lớn có lợi ích căn bản đối lập nhau trong một phương thức sản xuất xã hội nhất định.
                    </p>
                    <p>
                        •	Thực chất của đấu tranh giai cấp là cuộc đấu tranh của quần chúng lao động bị áp bức , bốc lột chống lại giai cấp bị áp bức, bốc lột nhằm lật đổ ách thống trị của chúng.
                    </p>
                    <p>
                        •	Nó biểu hiện ở nhiều lĩnh vực:
                        <br />
                        +	Kinh tế: tranh chấp về tư liệu sản xuất, điều kiện lao động, phân phối sản phẩm.
                        <br />
                        +	Chính trị: đấu tranh giành, giữ và sử dụng quyền lực nhà nước.
                        <br />
                        +	Tư tưởng – văn hóa: bảo vệ hệ tư tưởng của giai cấp thống trị hoặc phản kháng.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section2;