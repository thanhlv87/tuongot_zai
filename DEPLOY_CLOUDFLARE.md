# Hướng dẫn Deploy lên Cloudflare Pages

## 🚀 Cách 1: Deploy từ GitHub (Khuyên dùng)

### Bước 1: Chuẩn bị dự án

Dự án đã được cấu hình sẵn với:
- ✅ File `next.config.mjs` với `output: 'export'` cho static export
- ✅ Scripts build trong `package.json`

### Bước 2: Tạo file `.gitignore` (nếu chưa có)

Tạo file `.gitignore` ở root:

```gitignore
# Dependencies
node_modules
.pnp
.pnp.js

# Testing
coverage

# Next.js
.next/
out/
build/
dist/

# Misc
.DS_Store
*.pem

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
bun.lockb

# Local env files
.env
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Logs
*.log
dev.log
server.log

# Prisma
prisma/*.db
prisma/*.db-journal

# Images generated locally (if any)
images/*.png
!public/images/*.png
```

### Bước 3: Upload lên GitHub

#### 3.1. Tạo repository mới trên GitHub
1. Truy cập https://github.com/new
2. Đặt tên repository (ví dụ: `chili-sauce-landing-page`)
3. Chọn Public hoặc Private
4. Click **Create repository**

#### 3.2. Push code từ môi trường hiện tại lên GitHub

Nếu bạn có quyền truy cập trực tiếp vào terminal của dự án:

```bash
# Initialize Git (chạy lần đầu tiên)
git init

# Thay đổi thông tin
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add tất cả file
git add .

# Commit
git commit -m "Initial commit - Tương ớt landing page"

# Kết nối với GitHub repository
git remote add origin https://github.com/USERNAME/REPO-NAME.git
# Thay USERNAME và REPO-NAME bằng thông tin của bạn

# Push lên GitHub
git branch -M main
git push -u origin main
```

**Lưu ý**: Nếu bạn không có quyền truy cập trực tiếp vào terminal của môi trường hiện tại, bạn cần:
1. Tải toàn bộ dự án về máy của bạn
2. Sau đó chạy các lệnh Git trên

### Bước 4: Kết nối với Cloudflare Pages

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Trong menu, chọn **Workers & Pages**
3. Click **Create application**
4. Chọn tab **Pages** → **Connect to Git**
5. Chọn GitHub và authorize nếu cần
6. Chọn repository vừa tạo
7. Cấu hình Build Settings:

```
Project name: (tự do đặt, ví dụ: tuong-ot-huong-viet)
Framework preset: Next.js
Build command: bun run build
Build output directory: out
```

8. (Optional) Thêm Environment Variables nếu cần:
   - `NODE_VERSION`: `18` hoặc `20`
   - `BUN_VERSION`: `1.x`

9. Click **Save and Deploy**

### Bước 5: Đợi build và kiểm tra

- Cloudflare sẽ tự động build và deploy
- Sau khi hoàn thành, bạn sẽ nhận được URL dạng: `https://tuong-ot-huong-viet.pages.dev`

---

## 📦 Cách 2: Upload trực tiếp (Không cần Git)

### Bước 1: Build dự án

Trên terminal, chạy:

```bash
# Build static export
bun run build
```

Lưu ý: Đảm bảo `next.config.mjs` đã có cấu hình `output: 'export'`

### Bước 2: Upload lên Cloudflare

1. Đăng nhập [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Chọn **Workers & Pages** → **Create application** → **Pages**
3. Chọn **Upload Assets**
4. Đặt tên project
5. Upload toàn bộ thư mục `out` (nếu được tạo sau build) hoặc `.next` (tùy cấu hình)
6. Click **Deploy**

---

## 🔧 Xử lý vấn đề thường gặp

### Vấn đề 1: Hình ảnh không hiển thị

Giải pháp: `next.config.mjs` đã có cấu hình `images: { unoptimized: true }`

### Vấn đề 2: Route không hoạt động

Đảm bảo tất cả routes đã có trong `src/app` directory.

### Vấn đề 3: Build failed trên Cloudflare

Kiểm tra:
1. Framework preset đã chọn là **Next.js**
2. Build command là `bun run build`
3. Output directory là `out` (sau khi export)

---

## 🎯 Sau khi deploy

### Tùy chỉnh domain riêng (nếu có)

1. Trong Cloudflare Dashboard, chọn project của bạn
2. Tab **Custom domains**
3. Click **Set up a custom domain**
4. Nhập domain của bạn (ví dụ: `tuongot.com`)
5. Cập nhật DNS records theo hướng dẫn

---

## 📝 Tóm tắt nhanh

| Bước | Hành động |
|------|----------|
| 1 | Chuẩn bị `next.config.mjs` và `.gitignore` |
| 2 | Tạo GitHub repository |
| 3 | Push code lên GitHub |
| 4 | Connect GitHub với Cloudflare Pages |
| 5 | Cấu hình Build settings |
| 6 | Deploy và nhận URL |

---

## 🆘 Hỗ trợ

- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js on Cloudflare: https://developers.cloudflare.com/pages/framework-guides/nextjs/
- GitHub Issues của dự án: Nếu gặp lỗi, kiểm tra Cloudflare Build Logs
