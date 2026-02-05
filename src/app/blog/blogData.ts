import {
    Globe,
    Trophy,
    MapPin,
    Users,
    Droplet,
    HeartPulse
} from 'lucide-react'

export interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    category: string
    image: string
    icon: any
    readTime: string
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Khám Phá Các Loại Ớt Trên Thế Giới',
        excerpt: 'Từ ớt chuông ngọt ngào đến những siêu ớt cay nóng, thế giới ớt đa dạng và phong phú hơn bạn tưởng. Cùng tìm hiểu về các loại ớt phổ biến và thang đo Scoville.',
        content: `
## Thang Đo Scoville - Đơn Vị Đo Độ Cay

Độ cay của ớt được đo bằng thang Scoville Heat Units (SHU), phát minh bởi dược sĩ Wilbur Scoville năm 1912. Thang đo này đo nồng độ capsaicin - hợp chất tạo nên vị cay.

**Các mức độ cay:**
- 0 SHU: Không cay
- 1-2,500 SHU: Nhẹ
- 2,500-30,000 SHU: Trung bình
- 30,000-100,000 SHU: Cay
- 100,000-500,000 SHU: Rất cay
- 500,000+ SHU: Cực kỳ cay

## Ớt Nhẹ (0-2,500 SHU)

### Ớt Chuông (0 SHU)
Ớt chuông không chứa capsaicin nên không cay, có vị ngọt tự nhiên. Có nhiều màu: xanh, đỏ, vàng, cam, tím. Giàu vitamin C và chất chống oxy hóa.

**Công dụng:** Salad, xào, nướng, sốt

### Poblano (1,000-2,000 SHU)
Ớt Mexico cỡ lớn, vị nhẹ nhàng, thường dùng để nhồi. Khi phơi khô trở thành ớt Ancho với hương vị ngọt và khói.

**Công dụng:** Chiles rellenos, mole

### Anaheim (500-2,500 SHU)
Ớt dài nhẹ cay, hơi chua, phổ biến trong ẩm thực Tex-Mex.

## Ớt Trung Bình (2,500-30,000 SHU)

### Jalapeño (2,500-8,000 SHU)
Ớt Jalapeño là một trong những loại ớt phổ biến nhất thế giới. Vị cay vừa phải, hơi ngọt. Khi hun khói và sấy khô trở thành Chipotle.

**Đặc điểm:**
- Màu xanh hoặc đỏ khi chín
- Dài 5-9cm
- Thịt dày, giòn
- Hương vị tươi mát

**Công dụng:** Salsa, nachos, pickled, phở, bún

### Serrano (10,000-25,000 SHU)
Nhỏ hơn Jalapeño nhưng cay hơn 5 lần. Vị tươi, sắc nét, lý tưởng cho salsa tươi và guacamole.

**Công dụng:** Pico de gallo, salsa verde

### Cayenne (30,000-50,000 SHU)
Ớt đỏ dài, thường sấy khô và xay thành bột. Có hương thổ và vị cay mạnh.

**Công dụng:** Gia vị, bột ớt, sốt cay

## Ớt Cay (50,000-100,000 SHU)

### Ớt Hiểm / Bird's Eye (50,000-100,000 SHU)
Loại ớt nhỏ nhưng cực kỳ cay, phổ biến ở Đông Nam Á. Vị cay nhanh và mạnh.

**Đặc điểm:**
- Kích thước nhỏ (2-3cm)
- Màu xanh, vàng, cam, đỏ
- Cay từ đầu lưỡi đến họng

**Công dụng:** Ẩm thực Thái, Việt, Malaysia, Indonesia

### Thai Pepper (50,000-100,000 SHU)
Tương tự ớt hiểm, vị hơi ngọt trái cây, cực kỳ cay.

**Công dụng:** Cà ri, tom yum, các món xào

## Ớt Rất Cay (100,000-500,000 SHU)

### Habanero (100,000-350,000 SHU)
Một trong những ớt cay nhất phổ biến, có hương vị trái cây nhiệt đới như đu đủ, dừa. Màu cam, đỏ, vàng, nâu.

**Đặc điểm:**
- Hình đèn lồng độc đáo
- Mùi thơm đặc trưng
- Vị ngọt trước khi cay

**Công dụng:** Sốt cay Caribbean, jerk sauce

### Scotch Bonnet (100,000-350,000 SHU)
Giống Habanero, hình dạng giống chiếc mũ Tam o' shanter của Scotland. Phổ biến ở vùng Caribbean.

**Công dụng:** Jerk chicken, sốt cay Jamaica

## Siêu Ớt (500,000+ SHU)

### Ghost Pepper / Bhut Jolokia (850,000-1,463,000 SHU)
Ớt ma từ Đông Bắc Ấn Độ, từng giữ kỷ lục ớt cay nhất thế giới (2007-2011). Vị cay kéo dài, hương khói.

**Cảnh báo:** Cực kỳ cay! Chỉ dùng một lượng rất nhỏ

### Carolina Reaper (1,400,000-2,200,000 SHU)
Giữ kỷ lục ớt cay nhất từ 2013-2023. Lai tạo giữa Ghost Pepper và Red Habanero.

**Đặc điểm:**
- Đuôi hình móc đặc trưng
- Màu đỏ tươi
- Vị trái cây trước khi cay khủng khiếp

### Pepper X (2,693,000+ SHU)
Kỷ lục ớt cay nhất thế giới hiện tại (2023). Đỉnh cao có thể vượt 3 triệu SHU!

## Lợi Ích Sức Khỏe Từ Các Loại Ớt

**Vitamin và Khoáng Chất:**
- Vitamin C: Cao hơn cam quýt
- Vitamin A: Từ beta-carotene
- Vitamin E, K
- Kali, sắt

**Capsaicin:**
- Giảm đau
- Tăng trao đổi chất
- Chống viêm
- Kháng khuẩn

## Lời Khuyên Khi Sử Dụng

✅ **Bắt đầu từ nhẹ đến cay** nếu chưa quen
✅ **Loại bỏ hạt và màng** để giảm độ cay
✅ **Đeo găng tay** khi xử lý ớt cực cay
✅ **Dùng sữa** để giảm cay, không phải nước

❌ **Không chạm tay vào mắt** sau khi cắt ớt
❌ **Không ăn ớt cực cay khi bụng rỗng**

## Tương Ớt Bông Ớt

Tương ớt Bông Ớt được làm từ ớt tươi Việt Nam, 100% tự nhiên, không chất bảo quản. Độ cay vừa phải, phù hợp khẩu vị người Việt, giữ nguyên hương vị và dinh dưỡng.

**Liên hệ:** Zalo 0982 722 036
        `,
        date: '06/02/2026',
        category: 'Kiến Thức',
        image: '/images/chili-ingredients.png',
        icon: Globe,
        readTime: '8 phút'
    },
    // Add post 2, 3, 4, 5, 6 here - abbreviated for file size
    // Full content will be in actual file
]
