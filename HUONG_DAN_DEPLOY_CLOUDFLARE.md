# 🚀 HƯỚNG DẪN DEPLOY LÊN CLOUDFLARE PAGES
## Tương Ớt Hương Việt - Chi tiết từng bước

---

## 📋 NỘI DUNG

1. [Chuẩn bị](#1-chuẩn-bị)
2. [Truy cập Cloudflare Dashboard](#2-truy-cập-cloudflare-dashboard)
3. [Tạo Pages Project](#3-tạo-pages-project)
4. [Kết nối GitHub Repository](#4-kết-nối-github-repository)
5. [Cấu hình Build Settings](#5-cấu-hình-build-settings)
6. [Đợi Build và Deploy](#6-đợi-build-và-deploy)
7. [Kiểm tra Website](#7-kiểm-tra-website)
8. [Custom Domain (Tùy chọn)](#8-custom-domain-tùy-chọn)
9. [Xử lý Lỗi Thường Gặp](#9-xử-lý-lỗi-thường-gặp)

---

## 1. CHUẨN BỊ

### Kiểm tra điều kiện:

- ✅ GitHub repository đã tạo: https://github.com/tuongotpho/tuongot_zai
- ✅ Code đã được push lên GitHub (Đã hoàn thành)
- ✅ Tài khoản Cloudflare (miễn phí)

### Tài khoản Cloudflare:

1. Truy cập: https://dash.cloudflare.com/sign-up
2. Đăng ký bằng email hoặc GitHub/Google
3. Xác nhận email (nếu được yêu cầu)
4. Đăng nhập vào dashboard

---

## 2. TRUY CẬP CLOUDFLARE DASHBOARD

### Bước 2.1: Đăng nhập

1. Truy cập: https://dash.cloudflare.com/
2. Nhập email và mật khẩu để đăng nhập
3. Hoặc đăng nhập bằng GitHub/Google nếu bạn đã kết nối

### Bước 2.2: Tìm Workers & Pages

**Cách 1**: Từ sidebar
- Nhìn sang menu bên trái
- Tìm mục **Workers & Pages**
- Click vào đó

**Cách 2**: Từ trang chủ
- Scroll xuống phần "Resources"
- Click vào **Workers & Pages**

---

## 3. TẠO PAGES PROJECT

### Bước 3.1: Chọn Create Application

1. Trong trang Workers & Pages
2. Tìm button lớn màu xanh: **Create application**
3. Click vào đó

### Bước 3.2: Chọn Pages

Bạn sẽ thấy 2 tùy chọn:
- 🔵 **Workers** (cho server-side logic)
- ⚪ **Pages** (cho static sites)

**Chọn**: ⚪ **Pages**

### Bước 3.3: Chọn phương thức deploy

Bạn sẽ thấy 3 tùy chọn:
1. **Connect to Git** (khuyên dùng)
2. **Upload Assets**
3. **Direct Upload**

**Chọn**: **Connect to Git**

---

## 4. KẾT NỐI GITHUB REPOSITORY

### Bước 4.1: Kết nối GitHub

Nếu bạn chưa kết nối GitHub với Cloudflare:

1. Click vào logo **GitHub**
2. Click button **Connect GitHub**
3. Đăng nhập vào GitHub (nếu chưa login)
4. Cloudflare sẽ yêu cầu quyền truy cập:
   - ✅ **Repository access** - Cho phép Cloudflare đọc code của bạn
   - ✅ **Webhooks** - Để Cloudflare nhận biết khi có code mới
5. Click **Authorize Cloudflare** hoặc **Grant access**

### Bước 4.2: Chọn Repository

Sau khi authorize thành công:

1. Tìm repository: **tuongot_zai**
   - Có thể dùng thanh search
   - Hoặc scroll xuống danh sách
2. Click button **Begin setup**

---

## 5. CẤU HÌNH BUILD SETTINGS

### Bước 5.1: Project Settings

Điền thông tin như sau:

| Cài đặt | Giá trị | Ghi chú |
|---------|---------|---------|
| **Project name** | `tuong-ot-huong-viet` | Tên project của bạn |
| **Production branch** | `main` | Branch chính (mặc định) |
| **Framework preset** | `Next.js` | Rất quan trọng! |
| **Build command** | `bun run build` | Lệnh để build project |
| **Build output directory** | `out` | Thư mục output sau khi build |
| **Root directory** | (để trống) | Không cần điền |

**Chi tiết từng field**:

#### Project name:
- Tên này sẽ trở thành phần của URL
- Ví dụ: `https://tuong-ot-huong-viet.pages.dev`
- Có thể thay đổi sau
- Chỉ chứa: chữ thường, số, dấu gạch ngang

#### Framework preset:
- **Chọn: Next.js**
- Cloudflare sẽ tự động cấu hình môi trường tối ưu cho Next.js
- Không chọn "None" hoặc "Create React App"

#### Build command:
- **Nhập chính xác**: `bun run build`
- Đây là lệnh đã có trong `package.json`
- Bun là package manager nhanh hơn npm

#### Build output directory:
- **Nhập chính xác**: `out`
- Next.js với `output: 'export'` sẽ export files vào thư mục `out`
- Không phải `.next` hay `build`

#### Root directory:
- **Để trống**
- Vì code nằm ở root của repository

### Bước 5.2: Environment Variables (Tùy chọn)

Có thể thêm biến môi trường nếu cần:

**Cách thêm**:
1. Click nút **Add variable**
2. Nhập:
   - **Key**: `NODE_VERSION`
   - **Value**: `20`
3. Click thêm biến khác (nếu cần):
   - **Key**: `BUN_VERSION`
   - **Value**: `1.0.0`
4. Click **Add** để lưu

**Lưu ý**:
- Không bắt buộc cho dự án hiện tại
- Cloudflare sẽ tự động detect Node version
- Chỉ cần thêm nếu build gặp lỗi liên quan version

---

## 6. ĐỢI BUILD VÀ DEPLOY

### Bước 6.1: Bắt đầu Deploy

1. Kiểm tra lại toàn bộ cấu hình
2. Click button lớn: **Save and Deploy**
3. Trang sẽ chuyển sang giao diện deployment

### Bước 6.2: Theo dõi Build Process

**Trang Deployment** sẽ hiển thị:

1. **Deployment status**:
   - 🔄 Queued - Đang xếp hàng
   - 🔄 Building - Đang build
   - ✅ Success - Thành công
   - ❌ Failed - Thất bại

2. **Deployment steps** (khi đang build):
   ```
   ⏳ Cloning repository...
   ⏳ Installing dependencies...
   ⏳ Building...
   ⏳ Deploying...
   ```

3. **Time to deploy**: Thường 2-5 phút

**Lưu ý**:
- Không đóng tab trình duyệt trong khi build
- Có thể click **View build log** để xem chi tiết
- Nếu failed, xem log ở phần 9: Xử lý lỗi

### Bước 6.3: Deploy thành công

Khi build hoàn thành:

✅ **Success** sẽ hiển thị
✅ URL website sẽ hiện ra:
```
https://tuong-ot-huong-viet.pages.dev
```

**Thông tin bổ sung**:
- Deployment ID: Số phiên bản (ví dụ: `a1b2c3d`)
- Branch: `main`
- Commit message: "Initial commit - Tương ớt landing page"
- Deployment time: Ví dụ "2 minutes"

---

## 7. KIỂM TRA WEBSITE

### Bước 7.1: Truy cập Website

**Cách 1**: Click trực tiếp
1. Trên trang deployment thành công
2. Click vào URL màu xanh: `https://tuong-ot-huong-viet.pages.dev`
3. Website sẽ mở trong tab mới

**Cách 2**: Copy URL
1. Copy URL từ deployment page
2. Paste vào thanh địa chỉ trình duyệt
3. Enter

### Bước 7.2: Kiểm tra các tính năng

Duyệt qua website và kiểm tra:

✅ **Hero Section**:
- Banner tương ớt hiển thị không
- Nút "Đặt Mua Ngay" và "Liên Hệ Zalo" có hoạt động không

✅ **Products Section**:
- 2 sản phẩm (350ml và 500ml) hiển thị không
- Nút Zalo dẫn đúng link: https://zalo.me/0982722036

✅ **Google Maps**:
- Bản đồ hiển thị không
- Địa chỉ: Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội

✅ **Footer**:
- Thông tin liên hệ hiển thị đầy đủ
- Liên hệ Zalo hoạt động

✅ **Responsive**:
- Test trên mobile (resize trình duyệt về kích thước điện thoại)
- Test trên tablet và desktop

✅ **Hình ảnh**:
- 3 hình ảnh tương ớt hiển thị không:
  - /images/chili-hero.png
  - /images/chili-products.png
  - /images/chili-ingredients.png

### Bước 7.3: Test các link

1. **Link Zalo**:
   - Click nút "Đặt Mua Qua Zalo"
   - Mở ứng dụng Zalo hoặc web Zalo
   - Số hiển thị: 0982722036

2. **Google Maps**:
   - Bản đồ có thể zoom/pan
   - Pin hiển thị đúng vị trí

3. **Smooth scroll**:
   - Click menu "Sản Phẩm"
   - Trang scroll mượt mà xuống products section
   - Click menu "Liên Hệ"
   - Trang scroll xuống contact section

---

## 8. CUSTOM DOMAIN (TÙY CHỌN)

Nếu bạn có domain riêng (ví dụ: tuongot.com), bạn có thể cấu hình.

### Bước 8.1: Truy cập Custom Domains

1. Trong trang project trên Cloudflare
2. Click tab **Custom domains**

### Bước 8.2: Thêm Domain

1. Click **Set up a custom domain**
2. Nhập domain: ví dụ `tuongot.com` hoặc `www.tuongot.com`
3. Click **Activate domain**

### Bước 8.3: Cấu hình DNS

**Trường hợp 1**: Domain đã có trên Cloudflare

1. Cloudflare sẽ tự động tạo DNS records
2. Không cần làm gì thêm
3. Đợi 5-10 phút để DNS propagate

**Trường hợp 2**: Domain ở nhà cung cấp khác

Cloudflare sẽ hiển thị các DNS records cần thêm:

```
Type: CNAME
Name: www (hoặc @)
Target: [tên-pages-project].pages.dev
TTL: 3600 (hoặc mặc định)
```

Thực hiện:
1. Đăng nhập vào nhà cung cấp domain (GoDaddy, Namecheap, v.v.)
2. Thêm DNS record như trên
3. Đợi 24-48 giờ để DNS propagate

### Bước 8.4: Xác minh

1. Truy cập domain của bạn
2. Website tương ớt hiển thị không?
3. Check SSL certificate (có biểu tượng 🔒)

---

## 9. XỬ LÝ LỖI THƯỜNG GẶP

### ❌ Lỗi 1: Build Failed - "Framework not detected"

**Nguyên nhân**: Không chọn đúng Framework preset

**Giải pháp**:
1. Vào Settings của project
2. Scroll đến **Builds & deployments**
3. Click **Edit** cạnh Framework preset
4. Chọn **Next.js**
5. Save và deploy lại

### ❌ Lỗi 2: Build Failed - "Build command not found"

**Nguyên nhân**: Build command sai

**Giải pháp**:
1. Vào Settings
2. Chỉnh sửa **Build command**
3. Đổi thành chính xác: `bun run build`
4. Save và deploy lại

### ❌ Lỗi 3: Build Failed - "Output directory not found"

**Nguyên nhân**: Output directory sai

**Giải pháp**:
1. Vào Settings
2. Chỉnh sửa **Build output directory**
3. Đổi thành chính xác: `out`
4. Lưu ý: Chữ thường
5. Save và deploy lại

### ❌ Lỗi 4: Images not loading (Hình ảnh không hiển thị)

**Nguyên nhân**: Cấu hình Next.js chưa đúng

**Giải pháp**:
1. Kiểm tra file `next.config.mjs`
2. Đảm bảo có:
   ```javascript
   output: 'export',
   images: { unoptimized: true }
   ```
3. Nếu chưa, sửa file và commit lại
4. Cloudflare sẽ tự động deploy lại

### ❌ Lỗi 5: Links 404 Not Found

**Nguyên nhân**: Routing Next.js không hoạt động với static export

**Giải pháp**:
1. Trong code, không dùng dynamic routes (ví dụ: `[id].tsx`)
2. Tất cả routes phải là static (`page.tsx` trong folder)
3. Nếu có dynamic routes, cần tạo lại

### ❌ Lỗi 6: Git connection failed

**Nguyên nhân**: GitHub token hết hạn hoặc bị revoke

**Giải pháp**:
1. Vào Cloudflare Dashboard
2. Workers & Pages → Project của bạn
3. Settings → Git integration
4. Reconnect GitHub
5. Hoặc tạo Personal Access Token mới

### ❌ Lỗi 7: Deployment stuck at "Queued"

**Nguyên nhân**: Cloudflare server busy

**Giải pháp**:
1. Đợi 5-10 phút
2. Nếu vẫn stuck, cancel deployment
3. Deploy lại

### ❌ Lỗi 8: Website loads very slow

**Nguyên nhân**: Hình ảnh quá lớn hoặc CDN chưa cached

**Giải pháp**:
1. Optimize hình ảnh (compress)
2. Cloudflare sẽ tự động cache sau vài request
3. Có thể enable Cloudflare CDN features (caching rules)

---

## 🔧 QUẢN LÝ SAU KHI DEPLOY

### Cập nhật code (Update website)

**Khi bạn thay đổi code**:

1. Commit và push lên GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

2. Cloudflare sẽ tự động:
   - Nhận được webhook từ GitHub
   - Build lại
   - Deploy update
   - Thường mất 2-3 phút

3. Theo dõi deployment trên Cloudflare

### Xóa Deployment cũ

1. Vào project trên Cloudflare
2. Tab **Deployments**
3. Tìm deployment muốn xóa
4. Click menu (3 chấm)
5. Chọn **Delete deployment**

### Rollback về phiên bản cũ

1. Vào tab **Deployments**
2. Tìm deployment muốn quay về
3. Click **Rollback to this deployment**
4. Website sẽ trở về phiên bản đó

---

## 📊 GIÁM SÁT VÀ THỐNG KÊ

### Xem Analytics

1. Vào project trên Cloudflare
2. Tab **Analytics**
3. Xem:
   - Page views
   - Unique visitors
   - Bandwidth
   - Requests

### Xem Logs

1. Tab **Logs**
2. Thời gian thực: Real-time logs
3. Filter theo thời gian, status code

---

## 🎯 TỔNG KẾT

### Checklist cuối cùng:

- [ ] Code đã push lên GitHub
- [ ] Cloudflare account đã tạo
- [ ] Workers & Pages → Create Application
- [ ] Connect to Git → tuongot_zai repository
- [ ] Framework preset: Next.js
- [ ] Build command: bun run build
- [ ] Build output directory: out
- [ ] Save and Deploy
- [ ] Đợi build thành công (2-5 phút)
- [ ] Kiểm tra website live
- [ ] Test tất cả tính năng

---

## 🆘 HỖ TRỢ

**Tài liệu chính thức**:
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/
- Next.js on Cloudflare: https://developers.cloudflare.com/pages/framework-guides/nextjs/

**Liên hệ**:
- GitHub Issues của dự án: Nếu gặp lỗi code
- Cloudflare Community: https://community.cloudflare.com/

---

## 📱 QUICK REFERENCE CARD

```
GitHub Repository: https://github.com/tuongotpho/tuongot_zai
Cloudflare Dashboard: https://dash.cloudflare.com/

Build Settings:
  - Framework: Next.js
  - Build command: bun run build
  - Output directory: out
  - Root directory: (trống)

Liên hệ Zalo: 0982 722 036
Địa chỉ: Số 8, Ngõ 135 Núi Trúc, Giảng Võ, Hà Nội
```

---

**Chúc bạn deploy thành công! 🎉**

Nếu gặp bất kỳ vấn đề nào, hãy kiểm tra phần 9: Xử lý Lỗi Thường Gặp.
