const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));

// Define initial routes
app.get('/', (req, res) => {
  res.send('Welcome to the Remote Work Communication System! Start exploring!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});