#!/bin/bash

# Script helper để deploy lên GitHub và Cloudflare Pages
# Dùng cho môi trường Unix/Linux/macOS

echo "🚀 Chuẩn bị deploy dự án lên Cloudflare Pages..."
echo ""

# Kiểm tra Git đã được cài đặt chưa
if ! command -v git &> /dev/null; then
    echo "❌ Git chưa được cài đặt. Vui lòng cài đặt Git trước."
    exit 1
fi

# Kiểm tra xem đã có file cấu hình chưa
if [ ! -f "next.config.mjs" ]; then
    echo "❌ File next.config.mjs không tồn tại"
    exit 1
fi

# Build dự án
echo "📦 Building dự án..."
bun run build

if [ $? -ne 0 ]; then
    echo "❌ Build thất bại!"
    exit 1
fi

echo "✅ Build thành công!"
echo ""

# Hướng dẫn tiếp theo
echo "📝 Các bước tiếp theo để deploy:"
echo ""
echo "1. Tạo repository mới trên GitHub: https://github.com/new"
echo ""
echo "2. Thay thế thông tin bên dưới bằng thông tin của bạn:"
echo "   - YOUR_USERNAME: tên GitHub của bạn"
echo "   - YOUR_REPO: tên repository vừa tạo"
echo ""
echo "3. Chạy các lệnh sau:"
echo ""
echo "   # Initialize Git (chưa làm lần nào thì chạy)"
echo "   git init"
echo ""
echo "   # Add tất cả file"
echo "   git add ."
echo ""
echo "   # Commit"
echo "   git commit -m \"Deploy tương ớt landing page\""
echo ""
echo "   # Kết nối với GitHub"
echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git"
echo ""
echo "   # Push lên GitHub"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Truy cập Cloudflare Pages để kết nối GitHub:"
echo "   https://dash.cloudflare.com/"
echo "   Workers & Pages → Create application → Pages → Connect to Git"
echo ""
echo "   Cấu hình:"
echo "   - Framework preset: Next.js"
echo "   - Build command: bun run build"
echo "   - Build output directory: out"
echo ""
echo "✅ Hoàn thành! Xem chi tiết trong file DEPLOY_CLOUDFLARE.md"
