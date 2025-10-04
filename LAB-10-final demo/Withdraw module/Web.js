const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // user MySQL
  password: "123456", // mật khẩu MySQL
  database: "scheduler_db",
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ Đã kết nối MySQL");
});

// API: Lấy danh sách lịch
app.get("/schedules", (req, res) => {
  db.query("SELECT * FROM schedules ORDER BY time ASC", (err, results) => {
    if (err) return res.status(500).json({ message: "Lỗi server!" });
    res.json(results);
  });
});

// API: Thêm lịch mới
app.post("/schedules", (req, res) => {
  const { content, subtitle, channel, time } = req.body;

  if (!content || !channel || !time) {
    return res.status(400).json({ message: "Thiếu thông tin!" });
  }

  const sql =
    "INSERT INTO schedules (content, subtitle, channel, time) VALUES (?, ?, ?, ?)";
  db.query(sql, [content, subtitle, channel, time], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi server!" });
    res.json({ message: "✅ Lịch đã lưu thành công!", id: result.insertId });
  });
});

// API: Cập nhật trạng thái
app.put("/schedules/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  db.query(
    "UPDATE schedules SET status = ? WHERE id = ?",
    [status, id],
    (err) => {
      if (err) return res.status(500).json({ message: "Lỗi server!" });
      res.json({ message: "✅ Cập nhật trạng thái thành công!" });
    }
  );
});

// Chạy server
app.listen(3000, () => {
  console.log("🚀 Server chạy tại http://localhost:3000");
});
