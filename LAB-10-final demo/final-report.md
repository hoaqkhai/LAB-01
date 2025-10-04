# Final Report: Hub media bán lẻ đa kênh cho siêu thị mini

## 1. Giới thiệu dự án

Hub media bán lẻ đa kênh cho siêu thị mini là một ứng dụng booking nhằm mô phỏng quy trình đặt lịch đăng bày  cho người sử dụng thông qua UI khách hàng và các vai trò bên trong siêu thị . Mục tiêu:

- Cho người sử dụng thông tin thời gian, ngày đăng bài, các nền tảng đăng bài, check-in, hủy / đánh giá.  
- Cho admin / quản lý xử lý booking, quản lý bài, quản lý thời gian, xác nhận / hủy đăng bài.
- Cung cấp các công cụ test (unit, integration) để đảm bảo tính đúng đắn.  
- Dùng các mô hình UML (Use Case, Sequence, ERD) để thiết kế hệ thống trước khi lập trình.

Ứng dụng này không phải app production hoàn chỉnh, mà là bản demo để học các mô hình hệ thống, tích hợp, kiểm thử.

---
## 2. Các mô hình UML & Database

### 2.1 Use Case Diagram (tóm lược)
1. Quản lý nội dung (CMS)

- Tác nhân: Admin, Content Manager

- Use Case:

- Tạo nội dung

- Chỉnh sửa nội dung

- Xóa nội dung

- Upload ảnh/video

- Lưu nháp

- Xem trước nội dung

- Quản lý tag/metadata

2. Xuất bản & Lịch

- Tác nhân: Content Manager, Admin

- Use Case:

- Lên lịch xuất bản

- Chọn kênh xuất bản (Web, FB, Zalo, TikTok, YouTube)

- Đăng bài theo lịch

- Kết nối API MXH

- Ghi log lỗi & retry

3. Livestream & Tương tác

- Tác nhân: Content Manager, Moderator, Customer

- Use Case:

- Bắt đầu / Kết thúc livestream

- Lưu video VOD

- Chat & Bình luận realtime

- Moderator: duyệt/bỏ bình luận, lọc spam

- Customer: tham gia bình luận, reaction

4. Marketing & Phân tích

- Tác nhân: Marketer, Admin

- Use Case:

- Quản lý chiến dịch Marketing

- Phân tích & báo cáo (Analytics)

- Xuất báo cáo (PDF/Excel)

- Tối ưu SEO

- Kiểm tra Core Web Vitals
### 2.2 Sequence Diagrams
Data Flow Diagram – Lên lịch & Xuất bản đa kênh
1. Actor & External Entities

Content Manager → Người soạn và lên lịch xuất bản nội dung.

Mạng xã hội (Facebook, TikTok, YouTube, Zalo) → Hệ thống bên ngoài nhận nội dung.

Khách hàng (End User) → Người dùng cuối tiêu thụ nội dung.
### 2.3 ERD / Database & script SQL

Dựa trên các mô hình, mình đã định nghĩa các bảng chính và mối quan hệ:
- **User** (user_id (PK), name, email, password, role (Admin, Content, Marketer), social_login (Google, Facebook, …))

- **Content**(content_id (PK), title, body (text), media_url (ảnh/video), author_id (FK → User.user_id), created_at)

- **Schedule**(schedule_id (PK), content_id (FK → Content.content_id), channel (Web/FB/TikTok/YT/Zalo), publish_time, status (pending/success/fail))

- **Comment**(comment_id (PK), content_id (FK → Content.content_id), user_id (FK → User.user_id), text, status (approved/pending/rejected), created_at)

- **Campaign**(campaign_id (PK), name, description, start_date, end_date, CampaignContent (bảng trung gian N–M), campaign_id (FK → Campaign.campaign_id), content_id (FK → Content.content_id))

- **Analytics**(analytics_id (PK), content_id (FK → Content.content_id), views, likes, shares, seo_score)

 ## 3. Code SQL minh họa
CREATE TABLE `users` (
    `user_id` INT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(150) UNIQUE,
    `role` ENUM('Admin','Content','Marketer') NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
);
## 3.1 Code SQL minh họa
* Đăng nhập/Đăng ký    
  ![Login](https://github.com/hoaqkhai/LAB-01/blob/main/Lab-04/Login.png)
## 4. Kết quả chạy test

### 4.1 Unit Test (booking module)
### 4.2 Integration Test (login form)
## 5. Kết luận & định hướng mở rộng

### Kết luận

- Dự án Hub media đã tích hợp các bước: thiết kế UML → triển khai schema DB → backend + frontend → kiểm thử unit & integration.  
- Mô hình dữ liệu hợp lý, có thể mở rộng, có audit và thông báo.  
- Test bao phủ logic (unit) và UI login (integration).  
- Đây là phiên bản v1.0 demo đủ để kiểm tra chức năng đặt bàn cơ bản.

### Định hướng mở rộng

1. Tích hợp login & xác thực đa kênh (Hỗ trợ đăng nhập bằng zalo, Apple ID), Xác thực 2 lớp (2FA) cho quản trị viên
2. Thanh toán thực tế với **cổng MoMo / ZaloPay / ngân hàng**.  
3. Quản lý đa chi nhánh, phân quyền chi tiết owner/manager/staff.  
4. Cập nhật trạng thái thời gian thực  
5. API tích hợp partner qua webhook.  
6. Tối ưu hiệu năng & cache.  
7. UI/UX mobile-first & đa kênh 
8. CI/CD và pipeline test tự động.  
9. Monitoring & alert nâng cao (Hạn chế truy cập API, chống Spam) 
10. Cải thiện bảo mật, rate limit, xác thực hai lớp.
11. Marketing & loyalty tích hợp.
12. AI & phân tích dữ liệu bán lẻ.
13. Hỗ trợ đa ngôn ngữ & đa tiền tệ.

