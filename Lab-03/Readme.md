# 📌 Sequence Diagram: Chức năng “Lên lịch & Xuất bản đa kênh”

## 1. Đối tượng tham gia

Content Manager (Actor):

Người trực tiếp soạn nội dung (bài viết, ảnh, video).

Thiết lập kênh xuất bản và thời gian hẹn giờ.

UI (Web/App):

Giao diện hệ thống để Content Manager thao tác.

Gửi dữ liệu nhập vào cho hệ thống xử lý.

Hiển thị kết quả xuất bản và trạng thái cho người dùng.

CMS Controller (Hệ thống xử lý):

Trung tâm xử lý logic của ứng dụng.

Nhận dữ liệu từ UI, kiểm tra điều kiện, điều phối luồng xử lý.

CMS Database:

Kho dữ liệu của hệ thống.

Lưu trữ nội dung, lịch xuất bản, và trạng thái (Thành công/Thất bại).

API Gateway:

Trung gian để kết nối hệ thống CMS với các kênh MXH bên ngoài.

Đảm bảo gọi đúng API của từng nền tảng (Facebook, TikTok, YouTube, Zalo).

MXH (Facebook/TikTok/YouTube/Zalo/Web):

Các kênh truyền thông bên ngoài nơi nội dung sẽ được xuất bản.

Trả về phản hồi sau khi nhận dữ liệu xuất bản.

## 2. Các thông điệp trao đổi

Đăng nhập:

Content Manager → UI → CMS Controller → CMS Database

Xác thực tài khoản, đảm bảo người dùng có quyền đăng nhập.

Soạn nội dung & lịch:

Content Manager nhập nội dung trên UI.

UI gửi dữ liệu (bài viết, hình ảnh, video, kênh, thời gian) đến CMS Controller.

Lưu dữ liệu:

CMS Controller ghi thông tin vào CMS Database (nội dung + lịch xuất bản).

Hẹn giờ xuất bản:

Đúng thời gian, CMS Controller gửi yêu cầu đến API Gateway.

API Gateway gửi lần lượt tới các MXH theo lựa chọn.

Nhận phản hồi:

MXH trả kết quả (Thành công/Thất bại) về API Gateway.

API Gateway chuyển lại cho CMS Controller.

Cập nhật trạng thái:

CMS Controller ghi trạng thái vào Database.

Thông báo kết quả:

UI lấy trạng thái từ Database và hiển thị cho Content Manager.
