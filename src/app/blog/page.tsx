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
    Thermometer,
    Users,
    Droplet,
    HeartPulse
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

// Function to convert markdown table to HTML
function parseMarkdownTable(text: string): string {
    // Find all tables (lines starting with |)
    const tableRegex = /(\|.+\|\n)+/g

    return text.replace(tableRegex, (tableMatch) => {
        const rows = tableMatch.trim().split('\n')
        if (rows.length < 2) return tableMatch

        // Extract headers (first row)
        const headers = rows[0].split('|').filter(cell => cell.trim()).map(cell => cell.trim())

        // Skip separator row (second row with dashes)
        const dataRows = rows.slice(2).filter(row => row.includes('|'))

        // Build HTML table
        let html = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border-2 border-orange-200 rounded-lg">'

        // Header
        html += '<thead class="bg-gradient-to-r from-orange-100 to-red-100"><tr>'
        headers.forEach(header => {
            html += `<th class="border border-orange-300 px-3 sm:px-4 py-2 sm:py-3 text-left text-xs sm:text-sm font-bold text-gray-900">${header}</th>`
        })
        html += '</tr></thead>'

        // Body
        html += '<tbody class="bg-white">'
        dataRows.forEach((row, index) => {
            const cells = row.split('|').filter(cell => cell.trim()).map(cell => cell.trim())
            const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-orange-50/30'
            html += `<tr class="${bgClass} hover:bg-orange-50 transition-colors">`
            cells.forEach(cell => {
                html += `<td class="border border-orange-200 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-700">${cell}</td>`
            })
            html += '</tr>'
        })
        html += '</tbody></table></div>'

        return html
    })
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
    },
    {
        id: '4',
        title: 'Top 10 Quốc Gia Ăn Ớt Nhiều Nhất Thế Giới',
        excerpt: 'Khám phá những quốc gia yêu thích ớt nhất hành tinh. Từ Thổ Nhĩ Kỳ với 33kg/người đến Ấn Độ - vương quốc của ớt cay với hàng trăm món ăn.',
        content: `
## Con Số Ấn Tượng

Mỗi năm, con người tiêu thụ hàng triệu tấn ớt trên toàn thế giới. Nhưng quốc gia nào ăn nhiều nhất? Hãy cùng khám phá!

## Top 10 Quốc Gia (2024)

### 1. 🇹🇷 Thổ Nhĩ Kỳ - 33kg/người/năm

**Vị trí:** Nhà vô địch thế giới!

**Đặc điểm:**
- Tiêu thụ 33kg ớt/người mỗi năm
- Gấp đôi so với Mexico
- Ớt là gia vị không thể thiếu

**Món ăn phổ biến:**
- **Biber Dolması:** Ớt nhồi thịt
- **Kırmızı Biber:** Bột ớt đỏ
- **Pul Biber:** Bột ớt bột
- **Acılı Ezme:** Sốt ớt cay
- **İsot Biber:** Ớt Urfa đặc trưng

**Văn hóa ớt:**
Ở Thổ Nhĩ Kỳ, ớt không chỉ là gia vị mà còn là biểu tượng văn hóa. Mỗi vùng có loại ớt riêng, mỗi món ăn có cách dùng ớt khác nhau.

### 2. 🇪🇸 Tây Ban Nha - 17kg/người/năm

**Vị trí:** Á quân châu Âu

**Đặc điểm:**
- Tiêu thụ 17kg/năm
- Nổi tiếng với ớt Piquillo, Padrón
- Ớt trong ẩm thực Basque và Catalan

**Món ăn:**
- **Pimientos de Padrón:** Ớt Padrón chiên
- **Patatas Bravas:** Khoai tây sốt ớt
- **Romesco:** Sốt ớt đỏ
- **Gazpacho:** Súp cà chua ớt lạnh

### 3. 🇲🇽 Mexico - 15kg/người/năm

**Vị trí:** Quê hương của ớt

**Đặc điểm:**
- 15kg/năm
- Có hơn 100 loại ớt khác nhau
- Ớt là di sản văn hóa UNESCO

**Các loại ớt nổi tiếng:**
- Jalapeño, Poblano, Serrano
- Habanero, Chipotle, Ancho
- Guajillo, Pasilla, Cascabel

**Món ăn:**
- **Mole:** Sốt ớt chocolate
- **Salsa:** Hàng trăm loại
- **Enchiladas, Tacos, Tamales**
- **Chiles en Nogada**

### 4. 🇮🇳 Ấn Độ - Tiêu Thụ Lớn Nhất Thế Giới

**Vị trí:** Số 1 về tổng lượng

**Đặc điểm:**
- Tiêu thụ nhiều nhất (tổng khối lượng)
- Sản xuất 70% cho nội địa
- Là quê hương của Ghost Pepper

**Vùng trồng:**
- Andhra Pradesh
- Karnataka
- Maharashtra
- Assam (Bhut Jolokia)

**Món ăn:**
- **Vindaloo:** Cà ri cực cay
- **Chettinad Curry:** Ớt + gia vị
- **Mirchi Ka Salan:** Cà ri ớt
- **Pickles:** Dưa chua ớt

**Văn hóa:**
Ởt trong Ayurveda được coi là "thực phẩm nóng", tốt cho tiêu hóa và tuần hoàn.

### 5. 🇹🇭 Thái Lan

**Đặc điểm:**
- Một trong những quốc gia tiêu thụ nhiều nhất
- Ớt trong mọi bữa ăn
- Văn hóa "เผ็ด" (phet - cay)

**Món ăn:**
- **Som Tam:** Gỏi đu đủ ớt
- **Tom Yum:** Súp ớt
- **Larb:** Salad ớt
- **Gaeng Pet:** Cà ri đỏ cay

### 6. 🇨🇳 Trung Quốc

**Vùng nổi tiếng:**
- **Tứ Xuyên (Sichuan):** Ma La (tê cay)
- **Hồ Nam (Hunan):** Cay nồng
- **Quý Châu (Guizhou):** Cay chua

**Đặc trưng:**
- Sử dụng ớt kết hợp tiêu Tứ Xuyên
- Dầu ớt, tương ớt
- Lẩu ớt Tứ Xuyên

### 7. 🇮🇩 Indonesia

**Đặc điểm:**
- Sambal - linh hồn ẩm thực
- Hơn 300 loại sambal
- Ớt rawit (Bird's Eye)

**Món ăn:**
- **Sambal Oelek, Terasi, Matah**
- **Rendang:** Thịt ớt
- **Ayam Taliwang:** Gà nướng ớt

### 8. 🇰🇷 Hàn Quốc

**Đặc điểm:**
- Gochugaru (bột ớt Hàn)
- Gochujang (tương ớt)
- Ớt trong kimchi

**Món ăn:**
- **Kimchi Jjigae:** Canh kimchi
- **Buldak:** Gà cay phe
- **Tteokbokki:** Bánh gạo cay

### 9. 🇻🇳 Việt Nam

**Đặc điểm:**
- Tương ớt, dầu ớt
- Ớt tươi ăn kèm
- Nước mắm ớt

**Tiêu thụ:**
Khoảng 1.7kg/người/năm (pepper nói chung theo số liệu 2018)

**Món ăn:**
- Phở, bún bò, bún riêu + ớt
- Tương ớt chấm
- Ớt muối, ớt tỏi

### 10. 🇧🇷 Brazil

**Đặc điểm:**
- Malagueta pepper
- Ớt trong Bahian cuisine
- Molho de pimenta (sốt ớt)

## So Sánh Thú Vị

| Quốc Gia | kg/người/năm | Đặc Trưng |
|----------|--------------|------------|
| Thổ Nhĩ Kỳ | 33 | Nhiều nhất thế giới |
| Tây Ban Nha | 17 | Đa dạng loại ớt |
| Mexico | 15 | Quê hương ớt |
| Ấn Độ | - | Tiêu thụ tổng lớn nhất |

## Tại Sao Họ Ăn Nhiều Ớt?

### 1. Khí Hậu Nóng
- Ớt kích thích đổ mồ hôi
- Giúp làm mát cơ thể
- Chống vi khuẩn trong thực phẩm

### 2. Văn Hóa
- Truyền thống hàng ngàn năm
- Ớt = bản sắc ẩm thực
- Di sản văn hóa

### 3. Y Học Cổ Truyền
- Ayurveda (Ấn Độ)
- Đông y (Trung Quốc)
- Giúp tiêu hóa, tuần hoàn

### 4. Bảo Quản Thực Phẩm
- Kháng khuẩn tự nhiên
- Kéo dài tuổi thọ thực phẩm
- Pickle, muối chua

## Lợi Ích Khi Ăn Ớt Thường Xuyên

✅ **Tăng cường miễn dịch**
✅ **Cải thiện tim mạch**
✅ **Tăng trao đổi chất**
✅ **Giảm nguy cơ ung thư**
✅ **Kéo dài tuổi thọ**

Nghiên cứu cho thấy người ăn ớt thường xuyên có:
- Giảm 14% nguy cơ tử vong sớm
- Giảm 40% nguy cơ đột quỵ
- Tốt cho đường huyết

## Việt Nam Ở Đâu?

Tuy không nằm trong top đầu về lượng tiêu thụ, nhưng:

🇻🇳 **Việt Nam có:**
- Văn hóa ớt đặc trưng
- Nhiều loại ớt bản địa
- Tương ớt không chất bảo quản
- Cách chế biến độc đáo

## Tương Ớt Bông Ớt - Hương Vị Việt

Giữ gìn tinh hoa ớt Việt:
- 100% ớt tươi Việt Nam
- Không tỏi, không cà chua
- Không chất bảo quản
- Phù hợp khẩu vị người Việt

**Liên hệ:** Zalo 0982 722 036
        `,
        date: '09/02/2026',
        category: 'Thế Giới',
        image: '/images/chili-hero.png',
        icon: Users,
        readTime: '9 phút'
    },
    {
        id: '5',
        title: 'Những Loại Ớt Làm Tương Phổ Biến Nhất',
        excerpt: 'Từ Cayenne kinh điển đến Jalapeño tươi mát - khám phá những loại ớt được sử dụng nhiều nhất trong sản xuất tương ớt và sốt cay trên toàn thế giới.',
        content: `
## Tại Sao Chọn Loại Ớt Quan Trọng?

Mỗi loại ớt mang lại:
- **Độ cay** khác nhau (SHU)
- **Hương vị** đặc trưng
- **Màu sắc** thu hút
- **Kết cấu** phù hợp

Việc chọn đúng loại ớt quyết định đến chất lượng tương ớt!

## Top 10 Loại Ớt Làm Tương Phổ Biến

### 1. Cayenne Pepper - Vua Của Tương Ớt

**Độ cay:** 25,000-50,000 SHU

**Đặc điểm:**
- Ớt đỏ dài, thon
- Thịt mỏng, dễ sấy
- Màu đỏ tươi đẹp mắt
- Vị cay vừa phải

**Tại sao phổ biến:**
✅ Dễ trồng, năng suất cao
✅ Giá thành hợp lý
✅ Màu đỏ đẹp, bắt mắt
✅ Hương vị cân bằng
✅ Dễ xay thành bột

**Sản phẩm nổi tiếng:**
- **Frank's RedHot** - Tương ớt kinh điển Mỹ
- **Louisiana Hot Sauce** - Truyền thống miền Nam
- **Crystal Hot Sauce**
- Hầu hết các loại "Red Hot Sauce"

**Công thức cơ bản:**
- Cayenne tươi hoặc khô
- Giấm
- Muối
- Tỏi (tùy chọn)

### 2. Jalapeño - Tươi Mát Và Phổ Biến

**Độ cay:** 2,500-8,000 SHU

**Đặc điểm:**
- Thịt dày, mọng nước
- Màu xanh hoặc đỏ
- Vị tươi, hơi ngọt
- Cay nhẹ, dễ ăn

**Ứng dụng:**
✅ Tương ớt xanh (Green hot sauce)
✅ Salsa verde
✅ Tương ớt tươi
✅ Pickled jalapeño sauce

**Sản phẩm:**
- **Huy Fong Jalapeño Sauce**
- **El Yucateco Green Habanero** (có jalapeño)
- Các loại tương ớt xanh Mexico

**Đặc biệt:**
Khi hun khói và sấy khô → **Chipotle**, tạo ra tương ớt có vị khói đặc trưng.

### 3. Habanero - Cay Và Thơm

**Độ cay:** 100,000-350,000 SHU

**Đặc điểm:**
- Cực kỳ cay
- Hương trái cây nhiệt đới
- Màu cam, đỏ, vàng, nâu
- Vị ngọt trước khi cay

**Tại sao được yêu thích:**
✅ Hương thơm đặc trưng
✅ Vị phức tạp
✅ Độ cay cao cho "cay phê"
✅ Kết hợp tốt với trái cây

**Sản phẩm nổi tiếng:**
- **El Yucateco** series
- **Marie Sharp's** (Belize)
- **Melinda's** sốt habanero
- **Yellowbird** Habanero

**Công thức phổ biến:**
- Habanero + xoài
- Habanero + dứa
- Habanero + cà rốt
- Habanero + đào

### 4. Tabasco Pepper - Biểu Tượng Louisiana

**Độ cay:** 30,000-50,000 SHU

**Đặc điểm:**
- Ớt nhỏ, màu vàng→cam→đỏ
- Vị cay, hơi chua
- Lên men 3 năm trong thùng gỗ sồi

**Sản phẩm:**
- **Tabasco Original Red Sauce** - Nổi tiếng nhất thế giới!
- **Tabasco Green Sauce**
- **Tabasco Habanero**

Chỉ 3 nguyên liệu: Ớt Tabasco, muối, giấm!

### 5. Serrano - Cân Bằng Hoàn Hảo

**Độ cay:** 10,000-25,000 SHU

**Đặc điểm:**
- Nhỏ hơn jalapeño
- Cay hơn jalapeño 5 lần
- Vị tươi, sắc nét
- Màu xanh hoặc đỏ

**Ứng dụng:**
✅ Salsa tươi
✅ Pico de gallo
✅ Tương ớt Mexico
✅ Salsa verde

**Ưu điểm:**
- Cay vừa phải
- Không quá "nóng"
- Dễ tìm, giá rẻ
- Hương vị tuyệt vời

### 6. Thai Chili / Bird's Eye - Châu Á

**Độ cay:** 50,000-100,000 SHU

**Đặc điểm:**
- Nhỏ nhắn nhưng CỰC cay
- Màu đỏ, xanh, cam
- Vị cay sắc, nhanh
- Hương thơm đặc trưng

**Sản phẩm Châu Á:**
- **Sriracha** (Huy Fong, Flying Goose)
- **Sambal Oelek**
- **Sweet Chili Sauce**
- Tương ớt Thái, Việt

**Đặc biệt:**
Ởt hiểm Việt Nam thuộc nhóm này!

### 7. Scotch Bonnet - Caribbean Style

**Độ cay:** 100,000-350,000 SHU

**Đặc điểm:**
- Giống habanero
- Hình chiếc mũ độc đáo
- Vị trái cây nhiệt đới
- Phổ biến vùng Caribbean

**Sản phẩm:**
- **Walkerswood Scotch Bonnet**
- **Baron's Hot Sauce**
- Jerk sauces

### 8. Ghost Pepper (Bhut Jolokia) - Siêu Cay

**Độ cay:** 850,000-1,463,000 SHU

**Sử dụng:**
- Tương ớt siêu cay
- Extreme hot sauce
- Challenge sauces
- Chỉ dùng lượng rất ít!

**Sản phẩm:**
- **Dave's Ghost Pepper Sauce**
- **Blair's Ultra Death**
- **Mad Dog 357 Ghost**

⚠️ **Cảnh báo:** Cực kỳ cay! Chỉ cho người am hiểu.

### 9. Chipotle - Vị Khói Đặc Trưng

**Độ cay:** 2,500-10,000 SHU

**Đặc điểm:**
- Jalapeño hun khói
- Màu nâu sẫm
- Vị khói đậm đà
- Ngọt nhẹ

**Sản phẩm:**
- **Tabasco Chipotle**
- **Cholula Chipotle**
- BBQ sauces
- Adobo sauces

### 10. Ớt Việt Nam - Tương Ớt Truyền Thống

**Loại phổ biến:**
- **Ớt hiểm:** 100,000-225,000 SHU
- **Ớt chỉ thiên:** 100,000-250,000 SHU
- **Ớt sừng:** 5,000-30,000 SHU

**Đặc điểm:**
✅ Hương thơm đặc trưng Việt
✅ Độ cay vừa phải
✅ Phù hợp khẩu vị người Việt
✅ Giá trị dinh dưỡng cao

**Công thức truyền thống:**
- Ớt tươi
- Muối
- Đường (ít)
- KHÔNG tỏi, KHÔNG cà chua (như Bông Ớt)

## So Sánh Các Loại Ớt

| Loại Ớt | SHU | Vị | Dùng Cho |
|----------|-----|-----|----------|
| Jalapeño | 2,500-8,000 | Tươi, ngọt | Tương nhẹ |
| Cayenne | 25,000-50,000 | Cân bằng | Tương kinh điển |
| Tabasco | 30,000-50,000 | Chua, cay | Tabasco sauce |
| Habanero | 100,000-350,000 | Trái cây | Tương cao cấp |
| Ghost | 850,000+ | Siêu cay | Extreme sauce |

## Cách Chọn Ớt Làm Tương

### Mục Đích

**Tương ăn hàng ngày:**
→ Jalapeño, Serrano, Cayenne

**Tương cay mạnh:**
→ Habanero, Thai chili

**Tương siêu cay:**
→ Ghost Pepper, Carolina Reaper

**Tương có hương vị:**
→ Habanero, Scotch Bonnet, Chipotle

### Độ Tươi

✅ **Ớt tươi:** Hương vị tươi mát (Jalapeño, Serrano)
✅ **Ớt khô:** Vị đậm đà (Cayenne, Chipotle)
✅ **Lên men:** Phức tạp (Tabasco style)

### Màu Sắc

🔴 **Đỏ:** Cayenne, Tabasco (classic)
🟢 **Xanh:** Jalapeño, Serrano (fresh)
🟠 **Cam:** Habanero (exotic)
🟤 **Nâu:** Chipotle (smoky)

## Quy Trình Làm Tương Cơ Bản

### Phương Pháp 1: Tươi (Fresh)

1. Chọn ớt tươi (Jalapeño, Serrano)
2. Rửa sạch, bỏ cuống
3. Xay nhuyễn với giấm, muối
4. Nấu nhẹ 5-10 phút
5. Lọc hoặc để nguyên
6. Đóng chai

### Phương Pháp 2: Lên Men (Fermented)

1. Ớt tươi + muối
2. Ngâm nước muối 3-7 ngày
3. Xay nhuyễn
4. Thêm giấm
5. Đóng chai

### Phương Pháp 3: Truyền Thống Việt

1. Ớt tươi Việt Nam
2. Rửa sạch, phơi ráo
3. Xay với muối, đường
4. Không nấu (giữ nguyên enzyme)
5. Ủ 2-3 ngày
6. Bảo quản tủ lạnh

## Tương Ớt Bông Ớt

**Đặc biệt:**
- Sử dụng ớt Việt Nam chất lượng cao
- Công thức gia truyền
- Không chất bảo quản
- Không tỏi, không cà chua
- 100% tự nhiên

**Độ cay:**
Vừa phải, phù hợp người Việt - không quá nhẹ như jalapeño, không quá cay như habanero.

**Liên hệ đặt hàng:**
📱 Zalo: 0982 722 036
📍 Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội
        `,
        date: '10/02/2026',
        category: 'Kiến Thức',
        image: '/images/chili-products.png',
        icon: Droplet,
        readTime: '11 phút'
    },
    {
        id: '6',
        title: 'Công Dụng Tuyệt Vời Của Ớt Với Sức Khỏe',
        excerpt: 'Khám phá 15 lợi ích sức khỏe được chứng minh khoa học của ớt và capsaicin. Từ giảm cân, tăng miễn dịch đến phòng ngừa ung thư và kéo dài tuổi thọ.',
        content: `
## Capsaicin - Hoạt Chất Vàng

Capsaicin là hợp chất tạo nên vị cay của ớt và là chìa khóa cho hầu hết lợi ích sức khỏe.

**Cơ chế hoạt động:**
- Kích hoạt thụ thể TRPV1
- Giải phóng endorphin
- Tăng nhiệt độ cơ thể
- Kích thích trao đổi chất

## 15 Lợi Ích Sức Khỏe Được Chứng Minh

### 1. Hỗ Trợ Giảm Cân Hiệu Quả

**Cơ chế:**
✅ **Tăng Thermogenesis** - Sản sinh nhiệt
- Đốt cháy thêm 50-100 calo/ngày
- Tăng nhiệt độ cơ thể
- Tăng tốc độ trao đổi chất 5-10%

✅ **Giảm Cảm Giác Đói**
- Tăng cảm giác no
- Giảm lượng calo nạp vào
- Kiểm soát thèm ăn

✅ **Chuyển Hóa Mỡ Trắng → Mỡ Nâu**
- Mỡ nâu đốt calo để tạo nhiệt
- "Browning" của tế bào mỡ
- Giảm mỡ bụng

**Nghiên cứu (2023):**
Meta-analysis cho thấy bổ sung capsaicin:
- Giảm BMI đáng kể
- Giảm cân hiệu quả
- Giảm vòng eo

**Liều lượng khuyến nghị:**
2-5g ớt tươi/ngày hoặc 1-2 thìa tương ớt

### 2. Tăng Cường Hệ Miễn Dịch

**Vitamin C Siêu Cao:**
- 1 quả ớt = 150% nhu cầu vitamin C hàng ngày
- Cao gấp 2-3 lần cam
- Tăng sản xuất bạch cầu

**Chất Chống Oxi Hóa:**
- Beta-carotene → Vitamin A
- Quercetin - chống viêm
- Capsanthin - đặc trưng ớt đỏ
- Vitamin E

**Tính Kháng Khuẩn:**
- Tiêu diệt vi khuẩn H. pylori (loét dạ dày)
- Chống nhiễm trùng
- Hỗ trợ đường hô hấp

**Nghiên cứu:**
Người ăn ớt thường xuyên có:
- Số lượng bạch cầu cao hơn 20%
- Ít bị cảm cúm hơn
- Hệ miễn dịch mạnh mẽ hơn

### 3. Bảo Vệ Tim Mạch

**Lợi ích:**
✅ Giảm cholesterol xấu (LDL)
✅ Tăng cholesterol tốt (HDL)
✅ Ngăn hình thành cục máu đông
✅ Cải thiện tuần hoàn máu
✅ Giảm huyết áp
✅ Chống viêm mạch máu

**Nghiên cứu lớn:**
Nghiên cứu 500,000 người tại Trung Quốc:
- Ăn ớt hàng ngày: Giảm 14% nguy cơ tử vong
- Giảm 40% nguy cơ đột quỵ
- Giảm 26% nguy cơ bệnh tim

**Cơ chế:**
Capsaicin làm giảm plaque tích tụ trong động mạch do tính chống viêm.

### 4. Giảm Đau Tự Nhiên

**Ứng dụng:**
✅ Đau khớp, viêm khớp
✅ Đau thần kinh
✅ Đau đầu migraine
✅ Đau cơ
✅ Đau dây thần kinh tiểu đường

**Cơ chế:**
- Làm cạn kiệt chất P (chất dẫn truyền đau)
- Kích hoạt giải phóng endorphin (morphine tự nhiên)
- Giảm viêm

**Sản phẩm y tế:**
- Thuốc bôi capsaicin (0.025-0.075%)
- Miếng dán capsaicin
- Kem giảm đau

**FDA đã phê duyệt** capsaicin cho điều trị đau thần kinh!

### 5. Kiểm Soát Đường Huyết

**Lợi ích:**
✅ Cải thiện độ nhạy insulin
✅ Giảm đường huyết sau ăn
✅ Tăng hấp thu glucose vào tế bào cơ
✅ Giảm nguy cơ tiểu đường type 2

**Nghiên cứu:**
- Ớt giảm glucose máu sau ăn ở người tiểu đường thai kỳ
- Cải thiện dung nạp glucose
- Hỗ trợ kiểm soát HbA1c

**Lưu ý:**
Không thay thế thuốc! Hỏi bác sĩ trước khi dùng.

### 6. Chống Ung Thư

**Cơ chế:**
Capsaicin có khả năng:
✅ Ngăn chặn sự phát triển tế bào ung thư
✅ Kích thích apoptosis (chết tự nhiên của tế bào ung thư)
✅ Giảm stress oxy hóa
✅ Chống di căn

**Loại ung thư:**
- **Tuyến tiền liệt:** Hiệu quả cao nhất
- **Phổi:** Giảm phát triển
- **Dạ dày:** Phòng ngừa
- **Đại tràng:** Chống polyp

**Nghiên cứu tiền lâm sàng:**
Capsaicin ức chế nhiều loại tế bào ung thư trong ống nghiệm.

⚠️ **Lưu ý:** Cần thêm nghiên cứu lâm sàng trên người.

### 7. Cải Thiện Tiêu Hóa

**Lợi ích:**
✅ Kích thích tiết dịch vị
✅ Tăng enzyme tiêu hóa
✅ Cải thiện nhu động ruột
✅ Phòng ngừa táo bón
✅ Hỗ trợ hấp thu dinh dưỡng

**Bảo vệ dạ dày:**
- Tăng chất nhầy bảo vệ
- Ngăn loét dạ dày (nếu dùng đúng liều)
- Chống H. pylori

**Lưu ý:**
❌ Người đang bị loét dạ dày nên tránh
✅ Người khỏe mạnh: tốt cho dạ dày

### 8. Chống Viêm Mạnh Mẽ

**Hiệu quả:**
✅ Giảm viêm khớp
✅ Giảm viêm dạ dày (không cấp tính)
✅ Chống viêm mạch máu
✅ Giảm cytokine viêm

**Ứng dụng:**
- Viêm khớp dạng thấp
- Viêm xương khớp
- Viêm cơ
- Psoriasis

### 9. Kéo Dài Tuổi Thọ

**Nghiên cứu epidemiology:**
Người ăn ớt 6-7 ngày/tuần:
- Giảm 14% nguy cơ tử vong sớm
- Sống lâu hơn người không ăn ớt
- Ít mắc bệnh mãn tính

**Cơ chế:**
- Chống oxy hóa
- Bảo vệ DNA
- Giảm viêm mãn tính
- Cải thiện sức khỏe tim mạch

### 10. Tăng Cường Não Bộ

**Lợi ích:**
✅ Cải thiện trí nhớ
✅ Tăng tập trung
✅ Bảo vệ tế bào thần kinh
✅ Giảm nguy cơ Alzheimer

**Cơ chế:**
- Tăng lưu thông máu lên não
- Chống oxy hóa tế bào thần kinh
- Ảnh hưởng tích cực lên vi khuẩn đường ruột
- Liên quan đến chất chuyển hóa cholesterol

**Nghiên cứu:**
Capsaicin có tác dụng bảo vệ thần kinh trong Alzheimer thông qua vi sinh vật đường ruột.

### 11. Cải Thiện Da

**Lợi ích:**
✅ Giảm mụn (kháng khuẩn)
✅ Chống lão hóa (chống oxy hóa)
✅ Tăng tuần hoàn máu da
✅ Kích thích collagen

**Vitamin A (Beta-carotene):**
- Tái tạo tế bào da
- Chống nếp nhăn
- Da sáng khỏe

### 12. Hỗ Trợ Gan

**Lợi ích:**
✅ Giảm mỡ gan
✅ Giảm triglyceride gan
✅ Cải thiện enzyme gan
✅ Chống viêm gan

**Nghiên cứu:**
Capsaicin giúp giảm hepatic triglycerides và cải thiện tình trạng chuyển hóa gan.

### 13. Tăng Cường Hormone Vui

**Endorphin:**
- Cơ thể giải phóng endorphin để chống đau
- Tạo cảm giác "phê", vui vẻ
- Giảm stress, lo âu
- Cải thiện tâm trạng

**Dopamine:**
- Tăng cảm giác hài lòng
- Động lực

→ Đây là lý do nhiều người "nghiện" ớt!

### 14. Cải Thiện Tuần Hoàn

**Lợi ích:**
✅ Giãn mạch máu
✅ Tăng lưu lượng máu
✅ Ấm tay chân
✅ Giảm tê bái
✅ Cải thiện erection (nam)

**Cơ chế:**
Kích thích NO (nitric oxide) → giãn mạch.

### 15. Tăng Hấp Thu Dinh Dưỡng

**Lợi ích:**
✅ Tăng hấp thu các vitamin tan trong dầu (A, D, E, K)
✅ Tăng hấp thu beta-carotene
✅ Cải thiện sinh khả dụng của thực phẩm

**Mẹo:**
Kết hợp ớt với chất béo lành mạnh (dầu ô liu, bơ, hạt) để tối ưu hấp thu!

## Liều Lượng An Toàn

### Người Bình Thường
- **2-5g ớt tươi/ngày**
- Tương đương 1-2 thìa tương ớt
- Hoặc 3-5 quả ớt hiểm nhỏ

### Người Muốn Giảm Cân
- **5-10g/ngày**
- Chia nhỏ nhiều bữa

### Trẻ Em
- **Trên 5 tuổi:** 1/2 liều người lớn
- **Dưới 3 tuổi:** Không nên

### Người Cao Tuổi
- Bắt đầu liều thấp
- Tăng dần
- Tham khảo bác sĩ

## Ai Nên Hạn Chế?

❌ **Tránh hoàn toàn:**
- Người bị loét dạ dày cấp
- Viêm dạ dày cấp
- Trào ngược dạ dày thực quản nặng
- Trĩ đang chảy máu

⚠️ **Thận trọng:**
- Phụ nữ mang thai (hỏi bác sĩ)
- Đang dùng thuốc chống đông máu
- Chuẩn bị phẫu thuật

## Cách Dùng Để Đạt Hiệu Quả Tối Đa

### 1. Ăn Đều Đặn
- Mỗi ngày tốt hơn nhiều 1 lần
- Tích lũy theo thời gian

### 2. Kết Hợp Chất Béo
- Tăng hấp thu capsaicin
- Vitamin tan trong dầu

### 3. Đa Dạng Loại Ớt
- Mỗi loại có lợi ích riêng
- Đa dạng chất chống oxy hóa

### 4. Dùng Ớt Tươi
- Giữ nguyên vitamin C
- Enzyme sống
- Hương vị tốt nhất

### 5. Bảo Quản Đúng Cách
- Tủ lạnh sau khi mở
- Tránh ánh sáng
- Dùng thìa sạch

## Kết Hợp Với Thực Phẩm Khác

### Combo Tăng Gấp Đôi Hiệu Quả

**1. Ớt + Nghệ:**
Chống viêm cực mạnh, chống ung thư

**2. Ớt + Tỏi:**
Kháng khuẩn, tăng miễn dịch

**3. Ớt + Gừng:**
Tăng tuần hoàn, giảm cân

**4. Ớt + Chanh:**
Vitamin C x2, chống oxy hóa

**5. Ớt + Dầu ô liu:**
Hấp thu tối ưu, tốt cho tim

## Tương Ớt Bông Ớt - An Toàn Cho Sức Khỏe

**Cam kết:**
✅ 100% ớt tươi Việt Nam
✅ Không chất bảo quản độc hại
✅ Không tỏi (giảm kích ứng dạ dày)
✅ Không cà chua (tránh acid cao)
✅ Quy trình thủ công
✅ Giữ nguyên dưỡng chất

**Độ cay:**
Vừa phải - đủ để có lợi ích sức khỏe, không quá cay gây hại!

**Liên hệ:**
📱 Zalo: 0982 722 036
📍 Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội

---

**Lưu ý:** Thông tin chỉ mang tính tham khảo. Nếu có bệnh lý, hãy tham khảo bác sĩ trước khi thay đổi chế độ ăn.
        `,
        date: '11/02/2026',
        category: 'Sức Khỏe',
        image: '/images/chili-ingredients.png',
        icon: HeartPulse,
        readTime: '15 phút'
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
                                    className="text-gray-700 leading-relaxed text-sm sm:text-base [&_table]:shadow-lg [&_table]:rounded-lg"
                                    dangerouslySetInnerHTML={{
                                        __html: parseMarkdownTable(selectedPost.content)
                                            .replace(/\n## /g, '<h2 class="text-xl sm:text-2xl font-bold text-gray-900 mt-6 sm:mt-8 mb-3 sm:mb-4">')
                                            .replace(/\n### /g, '<h3 class="text-lg sm:text-xl font-bold text-gray-900 mt-4 sm:mt-6 mb-2 sm:mb-3">')
                                            .replace(/\n\*\*(.+?)\*\*/g, '\n<strong class="text-gray-900 font-semibold">$1</strong>')
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
