// document
//   .getElementById("scheduleForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     // Lấy dữ liệu từ form
//     const title = document.getElementById("title").value;
//     const content = document.getElementById("content").value;
//     const date = document.getElementById("date").value;
//     const time = document.getElementById("time").value;

//     // Kết hợp ngày + giờ thành 1 đối tượng Date
//     const scheduledDate = new Date(`${date}T${time}`);
//     const now = new Date();

//     let message = "";
//     if (scheduledDate > now) {
//       message = `✅ Nội dung "${title}" đã được lên lịch vào ${scheduledDate.toLocaleString()}`;

//       // Thông báo khi tới giờ (mô phỏng)
//       const delay = scheduledDate.getTime() - now.getTime();
//       setTimeout(() => {
//         alert(`📢 Nội dung "${title}" đã đến giờ xuất bản!`);
//       }, delay);
//     } else {
//       message = "⚠️ Thời gian bạn chọn không hợp lệ (quá khứ).";
//     }

//     // Hiển thị kết quả
//     document.getElementById("scheduleResult").innerText = message;
//   });
