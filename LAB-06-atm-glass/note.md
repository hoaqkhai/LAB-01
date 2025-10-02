# 📌 Class Diagram – Hub Media

## 1. Danh sách Class

User

Content

Schedule

Channel

Campaign

Comment

Analytics

### 1.1. Attribute & Method

- User

Attribute: user_id, username, email, password, role

Method: login(), logout(), manageAccount()

- Content

Attribute: content_id, title, body, media_url, status

Method: createContent(), editContent(), deleteContent(), publishContent()

- Schedule

Attribute: schedule_id, publish_time, status

Method: setSchedule(), updateSchedule(), cancelSchedule()

- Channel

Attribute: channel_id, name, type, api_token

Method: connectAPI(), publishContent()

- Campaign

Attribute: campaign_id, name, objective, budget

Method: createCampaign(), trackPerformance()

- Comment

Attribute: comment_id, user_id, content, status

Method: addComment(), approveComment(), deleteComment()

- Analytics

Attribute: analytics_id, views, clicks, engagement_rate, seo_score

Method: generateReport(), analyzeSEO()

### 1.2. Mối quan hệ

- User tạo nhiều Content.

- Content có thể gắn nhiều Schedule để lên lịch.

- Schedule liên kết với Channel để xuất bản đa kênh.

- Content nhận nhiều Comment từ người dùng.

- User có thể viết nhiều Comment.

- Campaign bao gồm nhiều Content.

- Content sinh ra dữ liệu Analytics để phân tích hiệu suất.

# 📌Package Diagram – Hub Media

## 1. Danh sách Package

User Management

- Content Management

- Scheduling

- Channel Integration

- Campaign Management

- Comment Management

- Analytics

### 1.1. Thành phần chính trong từng Package

- User Management

Chứa lớp: User

Chức năng: quản lý tài khoản, đăng nhập, phân quyền.

- Content Management

Chứa lớp: Content

Chức năng: tạo, chỉnh sửa, xoá, xuất bản nội dung.

- Scheduling

Chứa lớp: Schedule

Chức năng: lên lịch, cập nhật, huỷ lịch xuất bản.

- Channel Integration

Chứa lớp: Channel

Chức năng: kết nối API, đồng bộ và phân phối nội dung qua nhiều kênh.

- Campaign Management

Chứa lớp: Campaign

Chức năng: quản lý chiến dịch, theo dõi hiệu quả, ngân sách.

- Comment Management

Chứa lớp: Comment

Chức năng: thêm, duyệt, xoá bình luận.

- Analytics

Chứa lớp: Analytics

Chức năng: phân tích dữ liệu, tạo báo cáo, đánh giá SEO.

### 1.2. Mối quan hệ giữa các Package

- User Management liên kết với Content Management (User tạo Content).

- Content Management liên kết với Scheduling (Content được gắn lịch xuất bản).

- Scheduling liên kết với Channel Integration (lịch được thực thi trên các kênh).

- Content Management liên kết với Comment Management (nội dung có bình luận).

- Content Management liên kết với Campaign Management (Content nằm trong chiến dịch).

- Content Management cung cấp dữ liệu cho Analytics (phân tích hiệu quả).
