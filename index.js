require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./routes/api');
const app = express();

// Config:
const PORT = 81;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/api/tasks', apiRouter);

mongoose.connect(`${process.env.DB_URL}`)
  .then(() => {
    console.log("Connected to DB");
  })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});