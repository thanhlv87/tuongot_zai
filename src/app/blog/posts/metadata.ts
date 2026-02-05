// This file contains metadata for all 6 blog posts
// Full content is in individual post files: post-1.ts, post-2.ts, etc.
// NOTE: Currently only post-1.ts has been created with full content
// The remaining 5 posts are using placeholder metadata below
// TODO: Create post-2.ts through post-6.ts with full content from the old page.tsx

import { Trophy, MapPin, Users, Droplet, HeartPulse, Globe } from 'lucide-react'
import { BlogPost } from '../types'

export const postsMetadata: Omit<BlogPost, 'content'>[] = [
    {
        id: '1',
        slug: 'kham-pha-cac-loai-ot',
        title: 'Khám Phá Các Loại Ớt Trên Thế Giới',
        excerpt: 'Từ ớt chuông ngọt ngào đến những siêu ớt cay nóng, thế giới ớt đa dạng và phong phú hơn bạn tưởng. Cùng tìm hiểu về các loại ớt phổ biến và thang đo Scoville.',
        date: '06/02/2026',
        category: 'Kiến Thức',
        image: '/images/chili-ingredients.png',
        icon: Globe,
        readTime: '8 phút'
    },
    {
        id: '2',
        slug: 'pepper-x-ot-cay-nhat',
        title: 'Pepper X - Ớt Cay Nhất Thế Giới',
        excerpt: 'Từ Carolina Reaper đến Pepper X - hành trình chinh phục đỉnh cao cay. Tìm hiểu về những siêu ớt phá vỡ mọi giới hạn với hơn 3 triệu đơn vị Scoville.',
        date: '07/02/2026',
        category: 'Khám Phá',
        image: '/images/chili-hero.png',
        icon: Trophy,
        readTime: '10 phút'
    },
    {
        id: '3',
        slug: 'ot-viet-nam',
        title: 'Ớt Việt Nam - Hương Vị Đặc Trưng',
        excerpt: 'Từ ớt hiểm cay nồng đến ớt sừng ngọt dịu - ớt Việt Nam đa dạng và phong phú. Khám phá các giống ớt đặc trưng và giá trị dinh dưỡng của ớt quê hương.',
        date: '08/02/2026',
        category: 'Việt Nam',
        image: '/images/chili-products.png',
        icon: MapPin,
        readTime: '12 phút'
    },
    {
        id: '4',
        slug: 'cac-nuoc-an-ot-nhieu-nhat',
        title: 'Top 10 Quốc Gia Ăn Ớt Nhiều Nhất Thế Giới',
        excerpt: 'Khám phá những quốc gia yêu thích ớt nhất hành tinh. Từ Thổ Nhĩ Kỳ với 33kg/người đến Ấn Độ - vương quốc của ớt cay với hàng trăm món ăn.',
        date: '09/02/2026',
        category: 'Thế Giới',
        image: '/images/chili-hero.png',
        icon: Users,
        readTime: '9 phút'
    },
    {
        id: '5',
        slug: 'ot-lam-tuong-pho-bien',
        title: 'Những Loại Ớt Làm Tương Phổ Biến Nhất',
        excerpt: 'Từ Cayenne kinh điển đến Jalapeño tươi mát - khám phá những loại ớt được sử dụng nhiều nhất trong sản xuất tương ớt và sốt cay trên toàn thế giới.',
        date: '10/02/2026',
        category: 'Kiến Thức',
        image: '/images/chili-products.png',
        icon: Droplet,
        readTime: '11 phút'
    },
    {
        id: '6',
        slug: 'cong-dung-ot-voi-suc-khoe',
        title: 'Công Dụng Tuyệt Vời Của Ớt Với Sức Khỏe',
        excerpt: 'Khám phá 15 lợi ích sức khỏe được chứng minh khoa học của ớt và capsaicin. Từ giảm cân, tăng miễn dịch đến phòng ngừa ung thư và kéo dài tuổi thọ.',
        date: '11/02/2026',
        category: 'Sức Khỏe',
        image: '/images/chili-ingredients.png',
        icon: HeartPulse,
        readTime: '15 phút'
    },
]
