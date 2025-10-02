# 📑 PROJECT REPORT

## 1. Giới thiệu dự án

Tên đề tài: Hub Media – Hệ thống bán lẻ đa kênh cho siêu thị mini

### Mục tiêu:

- Xây dựng một Web App truyền thông đa phương tiện cho doanh nghiệp bán lẻ.

- Quản lý và xuất bản nội dung số (bài viết, ảnh, video) trên nhiều kênh (Web, Facebook, TikTok, YouTube, Zalo).

- Hỗ trợ livestream/WebRTC, nhúng video, bình luận & duyệt nội dung.

- Quản lý chiến dịch marketing, tối ưu SEO và phân tích hiệu quả bằng Analytics.

- Áp dụng mô hình phát triển phần mềm SDLC (Waterfall hoặc Agile-Scrum).

### Đối tượng sử dụng:

- Admin: quản trị toàn hệ thống, phân quyền.

- Content Manager: soạn bài, quản lý CMS, lên lịch.

- Marketer: triển khai chiến dịch, phân tích dữ liệu.

- Khách hàng: xem nội dung, bình luận.

- Mạng xã hội: Facebook, TikTok, YouTube, Zalo – nơi nhận nội dung qua API.

## 2. Artifacts đã xây dựng

- Use Case Diagram: mô tả các chức năng chính của hệ thống (quản lý CMS, lịch xuất bản, livestream, nhúng video, bình luận, chiến dịch, phân tích).

- Use Case Description: mô tả chi tiết các chức năng quan trọng (VD: Lên lịch xuất bản, Quản lý bình luận).

- Sequence Diagram: biểu diễn luồng tương tác giữa các đối tượng (User – System – Database – Social Media).

- Data Flow Diagram (DFD): mô tả chi tiết cách dữ liệu di chuyển qua các tiến trình (soạn nội dung → lưu DB → gửi API → cập nhật trạng thái).

- Entity-Relationship Diagram (ERD): thiết kế quan hệ dữ liệu (Users, Contents, Campaigns, Schedules, Comments, Analytics).

- SQL Database: file .sql để tạo database.

- Source Code Repo (GitHub): chứa mã nguồn, script SQL, diagram .drawio và report.

## 3. Database và ERD

### 📌 Các bảng chính

- Users: quản lý người dùng và phân quyền.

- Contents: bài viết, hình ảnh, video.

- Schedules: lịch xuất bản đa kênh.

- Campaigns: chiến dịch marketing.

- Comments: bình luận của khách hàng.

- Analytics: số liệu SEO, lượt view, like, share.

### 📌 ERD (Entity-Relationship Diagram)

- Users (1..N) → Contents

- Users (1..N) → Campaigns

- Contents (1..N) → Schedules

- Contents (1..N) → Comments

- Contents (1..N) → Analytics

## 4. Quy trình làm việc

- Bước 1: Thu thập yêu cầu → phân tích nghiệp vụ → xác định Actor & Use Case.

- Bước 2: Vẽ Use Case Diagram, mô tả chi tiết Use Case Description.

- Bước 3: Thiết kế Sequence Diagram & Data Flow Diagram cho các quy trình chính.

- Bước 4: Thiết kế ERD & tạo database schema (SQL).

- Bước 5: Cài đặt chức năng (theo mô hình Agile-Scrum → chia sprint).

- Bước 6: Test – Deploy – Optimize.

## 5. Hướng dẫn push code & tạo tag version 🌐

```bash
# Cấu hình lần đầu
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"

# Thêm remote
git remote add origin https://github.com/hoaqkhai/LAB-01.git

# Push code
git add .
git commit -m "first commit"
git push origin main

# Tạo tag v1.0
git tag v1.0
git push origin v1.0
```
