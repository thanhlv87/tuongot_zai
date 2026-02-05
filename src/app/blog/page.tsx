'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Flame,
    ArrowLeft,
    Calendar,
    Heart,
    Shield,
    Zap,
    Brain
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
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: '5 Lợi Ích Sức Khỏe Tuyệt Vời Từ Ớt',
        excerpt: 'Ớt không chỉ làm món ăn thêm hấp dẫn mà còn mang lại nhiều lợi ích cho sức khỏe. Tìm hiểu về những công dụng tuyệt vời của ớt.',
        content: `
## 1. Tăng Cường Hệ Miễn Dịch

Ớt chứa hàm lượng vitamin C cao gấp 2-3 lần cam quýt. Vitamin C là chất chống oxi hóa mạnh mẽ, giúp tăng cường hệ miễn dịch và bảo vệ cơ thể khỏi các bệnh tật.

## 2. Hỗ Trợ Giảm Cân

Capsaicin trong ớt có khả năng tăng tốc độ trao đổi chất, giúp đốt cháy nhiều calo hơn. Ăn ớt đều đặn có thể hỗ trợ quá trình giảm cân hiệu quả.

## 3. Cải Thiện Sức Khỏe Tim Mạch

Nghiên cứu cho thấy ớt giúp giảm cholesterol xấu (LDL), ngăn ngừa hình thành cục máu đông và cải thiện tuần hoàn máu, từ đó bảo vệ sức khỏe tim mạch.

## 4. Giảm Đau Tự Nhiên

Capsaicin có tác dụng giảm đau tự nhiên bằng cách làm giảm chất P - chất dẫn truyền tín hiệu đau trong cơ thể. Đây là lý do tại sao nhiều loại thuốc giảm đau chứa capsaicin.

## 5. Chống Viêm và Kháng Khuẩn

Ớt có đặc tính chống viêm mạnh mẽ, giúp giảm các triệu chứng viêm khớp, viêm dạ dày. Ngoài ra, ớt còn có khả năng kháng khuẩn, giúp tiêu diệt vi khuẩn có hại.

### Lưu Ý Khi Sử Dụng

- Người bị bệnh dạ dày nên hạn chế ăn ớt
- Nên kết hợp ớt với các thực phẩm giàu chất béo lành mạnh để tăng hấp thụ
- Chọn ớt tươi, không chất bảo quản như tương ớt Bông Ớt
    `,
        date: '05/02/2026',
        category: 'Sức Khỏe',
        image: '/images/chili-hero.png',
        icon: Heart
    },
    {
        id: '2',
        title: 'Capsaicin - Hoạt Chất Vàng Trong Ớt',
        excerpt: 'Capsaicin là hoạt chất chính tạo nên vị cay của ớt. Tìm hiểu về những công dụng tuyệt vời của capsaicin đối với sức khỏe.',
        content: `
## Capsaicin Là Gì?

Capsaicin là một hợp chất hóa học tự nhiên có trong ớt, đặc biệt là ớt cay. Đây chính là chất tạo nên cảm giác nóng, cay khi ăn ớt.

## Cơ Chế Hoạt Động

Khi capsaicin tiếp xúc với niêm mạc miệng, nó kích hoạt các thụ thể cảm giác nhiệt TRPV1, tạo ra cảm giác nóng và cay. Tuy nhiên, đây không phải là tổn thương thực sự mà chỉ là phản ứng của hệ thần kinh.

## Lợi Ích Của Capsaicin

### 1. Giảm Đau

- Được sử dụng trong nhiều loại thuốc bôi giảm đau
- Hiệu quả với đau khớp, đau thần kinh
- Giảm đau đầu migraine

### 2. Tăng Cường Trao Đổi Chất

- Tăng nhiệt độ cơ thể
- Đốt cháy calo hiệu quả
- Hỗ trợ kiểm soát cân nặng

### 3. Chống Ung Thư

Một số nghiên cứu cho thấy capsaicin có khả năng:
- Ngăn chặn sự phát triển của tế bào ung thư
- Kích thích quá trình chết tự nhiên của tế bào ung thư
- Đặc biệt hiệu quả với ung thư tuyến tiền liệt

### 4. Bảo Vệ Dạ Dày

Trái ngược với quan niệm thông thường, capsaicin thực sự có thể:
- Bảo vệ niêm mạc dạ dày
- Ngăn ngừa loét dạ dày
- Tăng cường sản xuất chất nhầy bảo vệ

## Liều Lượng An Toàn

Người trưởng thành khỏe mạnh có thể tiêu thụ 2-5g ớt tươi mỗi ngày. Tương ứng khoảng 1-2 thìa tương ớt.

## Sản Phẩm Từ Capsaicin

Tương ớt Bông Ớt giữ nguyên hàm lượng capsaicin tự nhiên, không qua chế biến hóa học, mang lại đầy đủ lợi ích cho sức khỏe.
    `,
        date: '04/02/2026',
        category: 'Kiến Thức',
        image: '/images/chili-ingredients.png',
        icon: Zap
    },
    {
        id: '3',
        title: 'Cách Sử Dụng Tương Ớt Đúng Cách',
        excerpt: 'Để tận dụng tối đa lợi ích từ tương ớt, bạn cần biết cách sử dụng đúng cách. Cùng tìm hiểu những mẹo hay khi dùng tương ớt.',
        content: `
## Thời Điểm Nên Ăn Ớt

### Buổi Sáng
- Giúp đánh thức cơ thể
- Tăng tốc độ trao đổi chất cả ngày
- Cung cấp năng lượng

### Bữa Trưa
- Hỗ trợ tiêu hóa
- Giảm cảm giác buồn ngủ sau ăn
- Tăng cường năng suất làm việc

### Buổi Tối
- Nên hạn chế nếu bạn có vấn đề về dạ dày
- Tốt nhất ăn trước 7 giờ tối

## Cách Kết Hợp Thực Phẩm

### Với Protein
- Thịt nướng + tương ớt: tuyệt vời
- Trứng + tương ớt: tăng hấp thụ dinh dưỡng
- Đậu phụ + tương ớt: món chay ngon miệng

### Với Rau Củ
- Rau sống chấm tương ớt: giữ nguyên vitamin
- Rau luộc + tương ớt: tăng khẩu vị
- Salad + tương ớt: món ăn healthy

### Với Tinh Bột
- Phở, bún + tương ớt: combo kinh điển
- Cơm + tương ớt: ăn ngon hơn
- Bánh mì + tương ớt: đậm đà

## Lưu Ý Quan Trọng

### Người Nên Hạn Chế

❌ Người bị đau dạ dày, loét dạ dày
❌ Phụ nữ mang thai (tham khảo bác sĩ)
❌ Trẻ em dưới 3 tuổi
❌ Người bị trĩ nặng

### Người Nên Ăn Nhiều

✅ Người muốn giảm cân
✅ Người có hệ miễn dịch yếu
✅ Người lạnh tay chân
✅ Người ít vận động

## Bảo Quản Tương Ớt

- Để nơi khô ráo, thoáng mát
- Sau khi mở nắp, bảo quản trong tủ lạnh
- Sử dụng trong vòng 3-6 tháng
- Luôn dùng thìa sạch để lấy

## Lựa Chọn Tương Ớt Chất Lượng

### Tương Ớt Bông Ớt - Lựa Chọn An Toàn

✅ Không chất bảo quản
✅ Không tỏi - không cà chua
✅ 100% nguyên liệu tươi
✅ Quy trình thủ công
✅ An toàn cho sức khỏe
    `,
        date: '03/02/2026',
        category: 'Hướng Dẫn',
        image: '/images/chili-products.png',
        icon: Shield
    },
    {
        id: '4',
        title: 'Ớt Giúp Tăng Cường Miễn Dịch',
        excerpt: 'Trong mùa dịch bệnh, việc tăng cường sức đề kháng là vô cùng quan trọng. Ớt có thể là "siêu thực phẩm" giúp bạn làm điều này.',
        content: `
## Tại Sao Ớt Tốt Cho Hệ Miễn Dịch?

### 1. Giàu Vitamin C

Ớt chứa hàm lượng vitamin C cao hơn cam:
- 1 quả ớt chuông đỏ: 169mg vitamin C
- 1 quả cam: 70mg vitamin C
- Vitamin C tăng cường sản xuất bạch cầu
- Bảo vệ tế bào khỏi tổn thương

### 2. Chất Chống Oxi Hóa

- Beta-carotene: chuyển hóa thành vitamin A
- Vitamin E: bảo vệ màng tế bào
- Quercetin: chống viêm mạnh mẽ
- Capsanthin: đặc trưng của ớt đỏ

### 3. Tính Kháng Khuẩn

Capsaicin có khả năng:
- Tiêu diệt vi khuẩn có hại
- Ngăn ngừa nhiễm trùng
- Hỗ trợ đường hô hấp

## Nghiên Cứu Khoa Học

### Nghiên Cứu 1: Tăng Cường Bạch Cầu

Một nghiên cứu năm 2016 cho thấy người ăn ớt thường xuyên có:
- Số lượng bạch cầu cao hơn 20%
- Khả năng chống nhiễm trùng tốt hơn
- Ít bị cảm cúm hơn

### Nghiên Cứu 2: Giảm Viêm

Nghiên cứu trên 500,000 người tại Trung Quốc:
- Ăn ớt hàng ngày giảm 14% nguy cơ tử vong
- Giảm viêm nhiễm đường hô hấp
- Cải thiện sức khỏe tổng thể

## Cách Sử Dụng Ớt Tăng Miễn Dịch

### Công Thức Tăng Cường Miễn Dịch

**Smoothie Ớt Chuông**
- 1/2 quả ớt chuông đỏ
- 1 quả táo
- 1/2 củ gừng
- 1 thìa mật ong
- Xay nhuyễn, uống mỗi sáng

**Trà Ớt Gừng**
- Vài lát gừng tươi
- 1/4 thìa tương ớt
- 1 thìa chanh
- Mật ong
- Pha với nước nóng

**Món Ăn Hàng Ngày**
- Thêm tương ớt vào mọi bữa ăn
- Chấm rau sống với tương ớt
- Nêm nếm với tương ớt

## Liều Lượng Khuyến Nghị

- **Người bình thường**: 1-2 thìa tương ớt/ngày
- **Mùa dịch**: 2-3 thìa tương ớt/ngày
- **Trẻ em trên 5 tuổi**: 1/2 thìa/ngày

## Kết Hợp Với Thực Phẩm Khác

### Tăng Gấp Đôi Hiệu Quả

1. **Ớt + Tỏi**: Combo kháng khuẩn mạnh
2. **Ớt + Gừng**: Tăng cường tuần hoàn
3. **Ớt + Chanh**: Vitamin C x2
4. **Ớt + Nghệ**: Chống viêm cực mạnh

## Lời Khuyên Từ Chuyên Gia

> "Việc ăn ớt đều đặn có thể giúp giảm 40% nguy cơ mắc các bệnh nhiễm trùng đường hô hấp. Tuy nhiên, cần chọn ớt tự nhiên, không chất bảo quản." - TS. Nguyễn Văn A, Viện Dinh Dưỡng Quốc gia

## Tương Ớt Bông Ớt - Đồng Hành Sức Khỏe

Với công thức 100% tự nhiên, không chất bảo quản, tương ớt Bông Ớt là lựa chọn an toàn để tăng cường sức đề kháng mỗi ngày.

**Liên hệ đặt hàng**: Zalo 0982 722 036
    `,
        date: '02/02/2026',
        category: 'Sức Khỏe',
        image: '/images/chili-hero.png',
        icon: Brain
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
                        <nav className="flex items-center gap-6">
                            <Link href="/">
                                <Button variant="ghost" className="text-gray-700 hover:text-orange-600">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Trang Chủ
                                </Button>
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Badge className="bg-white/20 text-white border-white/30 mb-4">
                        🌶️ Blog
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                        Kiến Thức Về Ớt & Sức Khỏe
                    </h1>
                    <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto">
                        Khám phá những lợi ích tuyệt vời của ớt và cách sử dụng tương ớt đúng cách cho sức khỏe
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 md:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {blogPosts.map((post) => (
                            <Card
                                key={post.id}
                                className="border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 cursor-pointer group"
                                onClick={() => setSelectedPost(post)}
                            >
                                <div className="aspect-video overflow-hidden bg-gradient-to-br from-orange-50 to-red-50">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge className="bg-orange-100 text-orange-700">
                                            {post.category}
                                        </Badge>
                                        <div className="flex items-center gap-1 text-sm text-gray-500">
                                            <Calendar className="h-4 w-4" />
                                            {post.date}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors flex items-start gap-2">
                                        <post.icon className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                                        <span>{post.title}</span>
                                    </CardTitle>
                                    <CardDescription className="text-gray-600">
                                        {post.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button
                                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
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

            {/* Article Modal */}
            <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    {selectedPost && (
                        <>
                            <DialogHeader>
                                <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-orange-50 to-red-50">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-100 text-orange-700">
                                        {selectedPost.category}
                                    </Badge>
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Calendar className="h-4 w-4" />
                                        {selectedPost.date}
                                    </div>
                                </div>
                                <DialogTitle className="text-3xl font-bold text-gray-900 flex items-start gap-2">
                                    <selectedPost.icon className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                                    <span>{selectedPost.title}</span>
                                </DialogTitle>
                                <DialogDescription className="text-gray-600 text-lg">
                                    {selectedPost.excerpt}
                                </DialogDescription>
                            </DialogHeader>
                            <div className="prose prose-orange max-w-none mt-6">
                                <div
                                    className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n## /g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">').replace(/\n### /g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">').replace(/\n- /g, '\n• ').replace(/\n/g, '<br />') }}
                                />
                            </div>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Footer */}
            <footer className="mt-auto bg-gradient-to-r from-gray-900 via-orange-900 to-gray-900 text-white py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Flame className="h-8 w-8 text-orange-400" />
                        <span className="text-xl font-bold">Bông Ớt</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                        Sản phẩm tương ớt tự nhiên, không chất bảo quản, không tỏi, không cà chua.
                    </p>
                    <p className="text-gray-400 text-sm mt-4">
                        © 2024 Bông Ớt. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
