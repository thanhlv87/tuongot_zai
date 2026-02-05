'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Flame,
    ArrowLeft,
    Calendar,
    Globe,
    Trophy,
    MapPin,
    Thermometer
} from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface BlogPost {
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

const blogPosts: BlogPost[] = [
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
    {
        id: '2',
        title: 'Pepper X - Ớt Cay Nhất Thế Giới',
        excerpt: 'Từ Carolina Reaper đến Pepper X - hành trình chinh phục đỉnh cao cay. Tìm hiểu về những siêu ớt phá vỡ mọi giới hạn với hơn 3 triệu đơn vị Scoville.',
        content: `
## Lịch Sử Những Ớt Cay Nhất

Cuộc đua tìm kiếm ớt cay nhất thế giới đã kéo dài hàng thập kỷ, với những kỷ lục liên tục bị phá vỡ.

### Timeline Kỷ Lục

**2000-2006: Naga Jolokia / Ghost Pepper**
- **Mức độ:** 850,000-1,463,000 SHU
- **Xuất xứ:** Đông Bắc Ấn Độ
- Ớt đầu tiên vượt ngưỡng 1 triệu SHU
- Tên "Bhut Jolokia" nghĩa là "ớt ma"
- Được quân đội Ấn Độ dùng làm lựu đạn hơi cay

**2011-2012: Trinidad Scorpion Butch T**
- **Mức độ:** 1,463,700 SHU
- **Xuất xứ:** Trinidad và Tobago
- Hình dạng như đuôi bọ cạp
- Vị ngọt trái cây trước khi cay khủng khiếp

**2012-2013: Trinidad Moruga Scorpion**
- **Mức độ:** Lên đến 2,000,000 SHU
- Ớt đầu tiên vượt 2 triệu SHU
- Cay đến mức gây tê lưỡi

**2013-2023: Carolina Reaper**
- **Mức độ:** Trung bình 1,641,183 SHU, đỉnh cao 2,200,000 SHU
- **Giữ kỷ lục:** 10 năm liên tiếp!
- **Người tạo ra:** Ed Currie, PuckerButt Pepper Company

## Carolina Reaper - Vua Ớt Trong Một Thập Kỷ

### Đặc Điểm Nhận Dạng

**Hình dạng độc đáo:**
- Đuôi nhỏ hình móc đặc trưng (như lưỡi liềm thần chết)
- Bề mặt gồ ghề, nhăn nheo
- Kích thước: 5-7cm
- Màu đỏ tươi khi chín

**Hương vị:**
- **Giai đoạn 1 (5-10 giây đầu):** Ngọt, hương trái cây
- **Giai đoạn 2 (10-30 giây):** Cay bắt đầu tăng nhanh
- **Giai đoạn 3 (30 giây+):** Cay cực độ, kéo dài 15-30 phút

### Tại Sao Nó Cay Đến Vậy?

Carolina Reaper là kết quả lai tạo giữa:
- **Ghost Pepper (Bhut Jolokia):** Độ cay truyền thống
- **Red Habanero:** Hương vị trái cây

Ed Currie đã mất hơn 10 năm để hoàn thiện giống ớt này, chọn lọc những cây cho quả cay nhất.

### Ứng Dụng

🌶️ **Sốt cay siêu cấp**
🌶️ **Đồ ăn thách thức** (challenge foods)
🌶️ **Y học:** Nghiên cứu capsaicin cho thuốc giảm đau
🌶️ **Quốc phòng:** Hơi cay, đạn cao su

⚠️ **Cảnh báo:** Chỉ nên dùng lượng RẤT NHỎ (đầu tăm)!

## Pepper X - Kỷ Lục Mới (2023-nay)

### Con Số Kinh Hoàng

**Guinness World Records 2023:**
- **Mức độ chính thức:** 2,693,000 SHU
- **Đỉnh cao:** Hơn 3,000,000 SHU!
- **Gấp gần 600 lần** Jalapeño
- **Cay hơn Carolina Reaper** khoảng 50%

### Ai Tạo Ra Pepper X?

Một lần nữa, Ed Currie - "cha đẻ" của Carolina Reaper - đã phá vỡ kỷ lục của chính mình!

**Quá trình phát triển:**
- Bắt đầu từ 2012 (cùng thời điểm với Reaper)
- Giữ bí mật trong hơn 10 năm
- Công bố chính thức tháng 10/2023
- Lai tạo từ nhiều giống ớt siêu cay

### Đặc Điểm

**Hình thái:**
- Hình dạng gần giống Carolina Reaper
- Đuôi dài hơn, nhọn hơn
- Màu xanh lá kho chín thành vàng, sau đó đỏ
- Bề mặt nhăn nhúm nghiêm trọng

**Vị:**
- Ngọt nhẹ ban đầu (1-2 giây)
- Cay bùng phát cực mạnh
- Kéo dài 30-45 phút
- Hậu vị cay nóng đến tận dạ dày

### Mức Độ Nguy Hiểm

⚠️⚠️⚠️ **NGUY HIỂM CỰC CAO** ⚠️⚠️⚠️

**Triệu chứng khi ăn:**
- Đổ mồ hôi dữ dội
- Nôn mửa
- Tê liệt tạm thời vùng miệng
- Đau bụng
- Tim đập nhanh
- Chóng mặt

**Khuyến cáo:**
- ❌ KHÔNG ăn cả quả
- ❌ KHÔNG ăn khi bụng rỗng
- ❌ KHÔNG cho trẻ em, người già
- ✅ Chỉ dùng lượng tí xíu trong nấu ăn
- ✅ Đeo găng tay khi xử lý
- ✅ Chuẩn bị sữa, kem để cấp cứu

## So Sánh Các Siêu Ớt

| Loại Ớt | SHU | Đặc Điểm |
|----------|-----|----------|
| Jalapeño | 2,500-8,000 | Chuẩn mực cay phổ thông |
| Cayenne | 30,000-50,000 | Cay trung bình |
| Habanero | 100,000-350,000 | Cay + hương trái cây |
| Ghost Pepper | 850,000-1,463,000 | Siêu cay lịch sử |
| Carolina Reaper | 1,641,183 AVG | Vua ớt 10 năm |
| **Pepper X** | **2,693,000+** | **Nhà vua hiện tại** |

## Capsaicin Ở Mức Cực Đại

Ở mức 3 triệu SHU, hàm lượng capsaicin trong Pepper X đã gần đạt giới hạn sinh học của cây ớt.

**Capsaicin nguyên chất:** 16,000,000 SHU

Pepper X đạt gần **20% nồng độ capsaicin tối đa** có thể!

## Có Ớt Nào Cay Hơn Không?

Hiện tại, Ed Currie tiết lộ họ đang phát triển:
- **Pepper Y**
- **Pepper Z**

Nhưng chưa công bố mức độ cay. Giới hạn sinh học của ớt vẫn chưa được biết chính xác!

## Tại Sao Người Ta Ăn Ớt Cực Cay?

**1. Adrenaline Rush**
Cơ thể giải phóng endorphin để chống đau → cảm giác "phê"

**2. Thử Thách Bản Thân**
YouTube challenges, eating contests

**3. Nghiên Cứu Khoa Học**
Capsaicin có tiềm năng y học lớn

**4. Đam Mê Ẩm Thực**
Tìm kiếm giới hạn vị giác

## Lời Khuyên An Toàn

### Nếu Ăn Nhầm Ớt Quá Cay:

✅ **DÙNG:**
- Sữa, kem, sữa chua (casein trung hòa capsaicin)
- Bánh mì, cơm (hấp thụ capsaicin)
- Đường, mật ong
- Kem đánh răng bạc hà (giảm nóng)

❌ **TRÁNH:**
- Nước lã (làm tệ hơn)
- Bia, rượu (hòa tan capsaicin rộng hơn)
- Nước ngọt có ga

## Ớt Việt Nam Vs Siêu Ớt

Ớt Việt Nam (ớt hiểm, ớt chỉ thiên) cay khoảng 50,000-250,000 SHU - đủ cay cho khẩu vị và rất tốt ¿ khỏe.

**Pepper X cay hơn 12-60 lần!**

## Kết Luận

Pepper X hiện là ớt cay nhất có thể tìm thấy trên Trái Đất. Nhưng cuộc đua vẫn tiếp tục!

**Tương Ớt Bông Ớt** sử dụng ớt Việt Nam truyền thống - độ cay hoàn hảo cho sức khỏe và khẩu vị, không cần đến mức "siêu cay" nguy hiểm.

**Liên hệ đặt hàng:** Zalo 0982 722 036
        `,
        date: '07/02/2026',
        category: 'Khám Phá',
        image: '/images/chili-hero.png',
        icon: Trophy,
        readTime: '10 phút'
    },
    {
        id: '3',
        title: 'Ớt Việt Nam - Hương Vị Đặc Trưng',
        excerpt: 'Từ ớt hiểm cay nồng đến ớt sừng ngọt dịu - ớt Việt Nam đa dạng và phong phú. Khám phá các giống ớt đặc trưng và giá trị dinh dưỡng của ớt quê hương.',
        content: `
## Vùng Trồng Ớt Nổi Tiếng Việt Nam

Việt Nam có khí hậu nhiệt đới gió mùa lý tưởng cho trồng ớt. Một số vùng trồng ớt nổi tiếng:

🌶️ **Tây Nguyên** (Đắk Lắk, Gia Lai): Ớt hồng, ớt gió
🌶️ **Hà Giang**: Ớt gió Hà Giang - đặc sản
🌶️ **Bắc Giang**: Ớt chỉ thiên
🌶️ **Ninh Bình, Nam Định**: Ớt sừng, ớt chuông
🌶️ **Đồng bằng sông Cửu Long**: Ớt hiểm

## Các Loại Ớt Việt Nam Phổ Biến

### 1. Ớt Hiểm (Ớt Mắt Chim, Ớt Thóc)

**Đặc điểm:**
- Kích thước nhỏ nhắn (2-3cm)
- Hình dáng nhọn, thon
- Màu xanh → vàng/cam → đỏ khi chín
- **Độ cay:** 100,000-225,000 SHU (rất cay!)

**Tên gọi:**
"Ớt hiểm" vì nhỏ nhưng cực kỳ cay, "ăn một cái là hiểm ngay"
"Ớt mắt chim" vì nhỏ như mắt chim
"Ớt thóc" vì nhỏ như hạt thóc

**Đặc tính vị:**
- Cay nhanh, mạnh ngay từ đầu
- Cay từ lưỡi, lan họng, xuống dạ dày
- Kéo dài 10-15 phút
- Hương thơm đặc trưng

**Công dụng:**
- Gia vị phở, bún, miến
- Nước mắm ớt
- Dầu ớt
- Muối ớt
- Ớt sa tế

**Giá trị dinh dưỡng:**
- Vitamin C cực cao
- Capsaicin mạnh mẽ
- Beta-carotene
- Chất xơ

### 2. Ớt Chỉ Thiên

**Đặc điểm:**
- Kích thước trung bình (5-8cm)
- Mọc ngược hướng lên trời → tên "chỉ thiên"
- Màu xanh → đỏ
- **Độ cay:** 100,000-250,000 SHU

**Đặc tính:**
- Cay vừa phải hơn ớt hiểm
- Thịt mỏng, giòn
- Hương thơm dễ chịu
- Dễ trồng, năng suất cao

**Công dụng:**
- Ớt tươi ngâm dấm
- Ớt muối
- Tương ớt
- Ớt bột
- Nấu ăn hàng ngày

**Vùng trồng nổi tiếng:**
- Bắc Giang
- Hải Dương
- Phú Thọ

### 3. Ớt Sừng (Ớt Sừng Trâu)

**Đặc điểm:**
- Kích thước lớn (10-15cm)
- Hình dáng dài, cong như sừng trâu
- Màu xanh → đỏ
- **Độ cay:** 5,000-30,000 SHU (nhẹ đến trung bình)

**Đặc tính vị:**
- Nhẹ cay hoặc gần không cay
- Ngọt tự nhiên
- Thịt dày, mọng nước
- Giòn khi tươi

**Công dụng:**
- Rau sống ăn kèm
- Món xào
- Nhồi thịt
- Nướng
- Salad

**Giá trị dinh dưỡng:**
- Vitamin C rất cao
- Vitamin A
- Chất béo thấp
- Ít calo

### 4. Ớt Chuông (Bell Pepper)

**Đặc điểm:**
- Kích thước lớn, tròn
- Có 4 múi
- Nhiều màu: xanh, đỏ, vàng, cam
- **Độ cay:** 0 SHU (không cay!)

**Đặc tính:**
- Ngọt, giòn
- Không capsaicin
- Thịt dày nhất
- Mọng nước

**Công dụng:**
- Salad
- Xào
- Nướng
- Nhồi
- Món Âu

### 5. Ớt Gió Hà Giang

**Đặc điểm:**
- Đặc sản vùng cao
- Kích thước nhỏ (3-5cm)
- Cay nhẹ
- **Hương thơm đặc trưng** rất mạnh

**Đặc tính:**
- Thơm hơn cay
- Vị ngọt tự nhiên
- Hậu vị dài
- Giá trị cao

**Thời vụ:**
- Chỉ có mùa gió (tháng 9-11)
- Khan hiếm → giá cao

**Công dụng:**
- Muối ớt
- Ăn tươi
- Gia vị cao cấp

### 6. Ớt Búng

**Đặc điểm:**
- Hình tròn nhỏ
- Cực kỳ cay
- Hiếm gặp

### 7. Ớt Xiêm

**Đặc điểm:**
- Lai từ ớt Thái Lan
- Cay mạnh
- Phổ biến miền Nam

## So Sánh Các Loại Ớt Việt Nam

| Loại | Độ Cay (SHU) | Kích Thước | Đặc Điểm |
|------|--------------|------------|----------|
| Ớt Hiểm | 100,000-225,000 | Rất nhỏ | Cực cay |
| Ớt Chỉ Thiên | 100,000-250,000 | Trung bình | Rất cay |
| Ớt Gió HG | 10,000-30,000 | Nhỏ | Thơm đặc biệt |
| Ớt Sừng | 5,000-30,000 | Lớn | Nhẹ-trung bình |
| Ớt Chuông | 0 | Rất lớn | Không cay |

## Giá Trị Dinh Dưỡng Ớt Việt Nam

### Vitamin và Khoáng Chất

**Vitamin C:**
- 1 quả ớt hiểm: 60-80mg vitamin C
- 1 quả ớt sừng: 100-150mg
- 1 quả ớt chuông đỏ: 150-200mg
- **So sánh:** 1 quả cam chỉ 70mg!

**Vitamin A (Beta-carotene):**
- Ớt đỏ chín > ớt xanh
- Tốt cho mắt, da

**Khác:**
- Vitamin E, K
- Kali
- Sắt
- Magiê

### Capsaicin - Hoạt Chất Vàng

**Lợi ích:**

✅ **Giảm đau tự nhiên**
- Kích thích giải phóng endorphin
- Làm giảm chất P (dẫn truyền đau)

✅ **Tăng cường trao đổi chất**
- Đốt cháy 50-100 calo thêm/ngày
- Hỗ trợ giảm cân

✅ **Tốt cho tim mạch**
- Giảm cholesterol xấu
- Ngăn cục máu đông
- Cải thiện tuần hoàn

✅ **Chống viêm**
- Giảm viêm khớp
- Hỗ trợ tiêu hóa

✅ **Kháng khuẩn**
- Tiêu diệt vi khuẩn H.pylori
- Phòng ngừa nhiễm trùng

## Món Ăn Đặc Trưng Với Ớt Việt Nam

### Nước Mắm Ớt Hiểm
**Nguyên liệu:**
- 5-7 quả ớt hiểm
- 3 tép tỏi
- 1 thìa đường
- 3 thìa nước mắm
- 2 thìa nước cốt chanh
- 1/2 chén nước

### Muối Ớt
**Nguyên liệu:**
- Ớt tươi (hiểm hoặc chỉ thiên)
- Muối hạt
- Tỏi
- Rượu trắng (tùy chọn)

### Tương Ớt Truyền Thống
**Nguyên liệu:**
- Ớt tươi
- Tỏi (hoặc không)
- Đường
- Muối
- Giấm (tùy chọn)

## Cách Bảo Quản Ớt

### Ớt Tươi:
- Để ngăn mát tủ lạnh: 1-2 tuần  
- Không rửa trước khi cất
- Cho vào túi ni lông có lỗ thông khí

### Ớt Khô:
- Phơi nắng hoặc máy sấy
- Bảo quản nơi khô ráo
- Giữ được 6-12 tháng

### Ớt Ngâm:
- Ngâm trong dầu, dấm, hoặc muối
- Giữ được 3-6 tháng

### Đông Lạnh:
- Rửa sạch, để ráo
- Cho vào túi zip
- Giữ được 10-12 tháng

## Trồng Ớt Tại Nhà

### Ưu Điểm:
- Dễ trồng
- Cho quả nhiều
- Tươi, sạch, an toàn

### Hướng Dẫn Cơ Bản:

**1. Chọn giống:**
- Ớt chỉ thiên: dễ nhất
- Ớt hiểm: vừa phải
- Ớt sừng: cần chỗ rộng

**2. Trồng:**
- Chậu to (3-5 lít)
- Đất phù sa hoặc đất trộn
- Thoát nước tốt

**3. Chăm sóc:**
- Tưới: 1-2 lần/ngày
- Phơi nắng: 6-8 giờ/ngày
- Bón phân: 2 tuần/lần

**4. Thu hoạch:**
- Sau 60-90 ngày
- Hái khi chín đỏ (cay nhất)

## Ớt Trong Văn Hóa Việt Nam

### Tục Ngữ:

"Có ớt, có muối mới ra món"
"Ăn no mới xét đến cay"
"Nhạt mặn theo ý, đậm nhạt tùy người"

### Ý Nghĩa:

🌶️ **Sự chịu đựng, bền bỉ**
🌶️ **Hương vị đậm đà của cuộc sống**
🌶️ **Thêm vị cho bữa cơm** (vật chất + tinh thần)

## Tương Ớt Bông Ớt - Tinh Hoa Ớt Việt

**Đặc biệt:**
- Sử dụng ớt Việt Nam chất lượng cao
- Không tỏi, không cà chua
- 100% tự nhiên
- Không chất bảo quản
- Quy trình thủ công

**Độ cay:**
Vừa phải, phù hợp người Việt - không quá cay như ớt hiểm nguyên chất, nhưng đủ để cảm nhận hương vị đặc trưng.

**Liên hệ đặt hàng:**
📱 Zalo: 0982 722 036
📍 Địa chỉ: Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội

**Cam kết:**
✅ Nguồn gốc rõ ràng
✅ An toàn thực phẩm
✅ Hỗ trợ nông dân Việt
✅ Giá cả hợp lý
        `,
        date: '08/02/2026',
        category: 'Việt Nam',
        image: '/images/chili-products.png',
        icon: MapPin,
        readTime: '12 phút'
    }
]

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50/30 via-white to-orange-50/20">
            {/* Navigation */}
            <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <Flame className="h-8 w-8 text-orange-600" />
                            <span className="text-xl font-bold text-orange-700">Bông Ớt</span>
                        </Link>
                        <nav className="flex items-center gap-4 sm:gap-6">
                            <Link href="/">
                                <Button variant="ghost" className="text-gray-700 hover:text-orange-600 text-sm sm:text-base">
                                    <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
                                    <span className="hidden sm:inline">Trang Chủ</span>
                                    <span className="sm:hidden">Home</span>
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-white/20 text-white border-white/30 mb-3 sm:mb-4 text-xs sm:text-sm">
                        🌶️ Blog
                    </Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        Thế Giới Ớt
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-orange-100 max-w-2xl mx-auto px-4">
                        Khám phá các loại ớt từ khắp nơi trên thế giới và ớt Việt Nam đặc trưng
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {blogPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 cursor-pointer group flex flex-col"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader className="flex-1">
                                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                                        <Badge className="bg-orange-100 text-orange-700 text-xs">
                                            {post.category}
                                        </Badge>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span className="hidden sm:inline">{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Thermometer className="h-3 w-3" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex items-start gap-2">
                                        <post.icon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 flex-shrink-0 mt-1" />
                                        <span className="line-clamp-2">{post.title}</span>
                                    </CardTitle>
                                    <CardDescription className="text-sm sm:text-base text-gray-600 line-clamp-3">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <Button
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm sm:text-base"
                                        onClick={() => setSelectedPost(post)}
                                    >
                                        Đọc Thêm →
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Article Modal - Improved Responsive */}
            <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
                <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
                    {selectedPost && (
                        <>
                            <DialogHeader>
                                <div className="aspect-video overflow-hidden rounded-lg mb-3 sm:mb-4 bg-gradient-to-br from-orange-50 to-red-50">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <Badge className="bg-orange-100 text-orange-700 text-xs">
                                        {selectedPost.category}
                                    </Badge>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-3 w-3" />
                                            {selectedPost.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Thermometer className="h-3 w-3" />
                                            {selectedPost.readTime}
                                        </div>
                                    </div>
                                </div>
                                <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-start gap-2">
                                    <selectedPost.icon className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600 flex-shrink-0 mt-1" />
                                    <span>{selectedPost.title}</span>
                                </DialogTitle>
                                <DialogDescription className="text-gray-600 text-sm sm:text-base md:text-lg">
                                    {selectedPost.excerpt}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="prose prose-sm sm:prose-base prose-orange max-w-none mt-4 sm:mt-6">
                                <div
                                    className="text-gray-700 leading-relaxed whitespace-pre-wrap text-sm sm:text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: selectedPost.content
                                            .replace(/\n## /g, '<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">')
                                            .replace(/\n### /g, '<h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">')
                                            .replace(/\n\*\*(.+?)\*\*/g, '\n<strong class="text-gray-900">$1</strong>')
                                            .replace(/\n- /g, '\n• ')
                                            .replace(/\n/g, '<br />')
                                    }}
                                />
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Footer */}
            <footer className="mt-auto bg-gradient-to-r from-gray-900 via-orange-900 to-gray-900 text-white py-8 sm:py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <Flame className="h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                        <span className="text-lg sm:text-xl font-bold">Bông Ớt</span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm">
                        Sản phẩm tương ớt tự nhiên, không chất bảo quản, không tỏi, không cà chua.
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-3 sm:mt-4">
                        © 2024 Bông Ớt. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
