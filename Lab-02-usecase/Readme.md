Mô tả 2 chức năng quan trọng

# Use Case Description - Hub media bán lẻ đa kênh cho siêu thị mini

## Use Case 1: Lên lịch xuất bản nội dung

Tên Use Case: Lên lịch xuất bản nội dung
Tác nhân chính: Content Manager, Admin
Mục tiêu: Cho phép người dùng lên lịch để bài viết hoặc video được tự động đăng trên các kênh (FB, TikTok, Zalo, YouTube).

### Mô tả ngắn gọn:

Người dùng chọn nội dung, chọn kênh xuất bản, đặt thời gian, hệ thống lưu lịch và đến thời điểm sẽ tự động đăng.

### Dòng sự kiện chính (Main Flow):

- Content Manager đăng nhập hệ thống.

- Chọn chức năng “Lên lịch xuất bản”.

- Chọn bài viết/video đã chuẩn bị trong CMS.

- Chọn kênh xuất bản (FB, TikTok, YouTube, Zalo, Web).

- Nhập ngày giờ xuất bản.

- Xác nhận và lưu.

- Đến thời gian đã hẹn, hệ thống gọi API kênh MXH để đăng nội dung.

- Hệ thống thông báo “Xuất bản thành công”.

### Luồng thay thế (Alternative Flow):

- Nếu API MXH bị lỗi → hệ thống ghi log & retry 3 lần.

- Nếu vẫn lỗi → gửi thông báo cho Admin.

### Điều kiện tiên quyết (Precondition):

- Nội dung đã được tạo & duyệt trong CMS.

- Người dùng có quyền xuất bản.

### Điều kiện sau (Postcondition):

- Nội dung được xuất bản đúng giờ hoặc có thông báo lỗi.

## Use Case 2: Livestream bán hàng

- Tên Use Case: Livestream bán hàng
- Tác nhân chính: Content Manager, Customer, Moderator
- Mục tiêu: Tổ chức buổi livestream giới thiệu sản phẩm, khách hàng có thể bình luận và đặt câu hỏi theo thời gian thực.

### Mô tả ngắn gọn:

- Content Manager khởi tạo phiên livestream, khách hàng tham gia xem, Moderator quản lý bình luận và chat.

### Dòng sự kiện chính (Main Flow):

- Content Manager đăng nhập và chọn “Bắt đầu Livestream”.

- Hệ thống kết nối với camera/micro, hiển thị video trực tiếp.

- Customer tham gia livestream qua link chia sẻ.

- Customer gửi bình luận/chat.

- Moderator kiểm duyệt bình luận (ẩn spam, duyệt hợp lệ).

- Livestream kết thúc → hệ thống lưu video VOD.

### Luồng thay thế (Alternative Flow):

- Nếu kết nối livestream mất ổn định → hệ thống tự động reconnect.

- Nếu bình luận chứa từ khóa spam → tự động lọc và chặn.

### Điều kiện tiên quyết (Precondition):

- Hệ thống được kết nối với kênh MXH (FB Live, YouTube Live).

- Có ít nhất một Content Manager và Moderator tham gia.

### Điều kiện sau (Postcondition):

- Video được lưu dưới dạng VOD để xem lại.

- Thống kê lượt xem, bình luận được lưu cho báo cáo.
