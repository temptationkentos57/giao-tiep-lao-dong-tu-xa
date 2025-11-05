const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối tới MongoDB thành công'))
  .catch(err => console.log(err));

// Định nghĩa các route khởi đầu
app.get('/', (req, res) => {
  res.send('Chào mừng bạn đến với Giao Tiếp Lao Động Từ Xa! Hãy bắt đầu!');
});

app.listen(PORT, () => {
  console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
});