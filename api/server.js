const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");

const path = require('path');

const app = express();

app.use(cors());
app.use(json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const { parsed: config } = dotenv.config();
const BASE_URL =`https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = { 
              username: config.API_KEY,
              password: config.API_SECRET,
              
               }

app.get("/photos", async (req, res) => {
  const response = await axios.get(BASE_URL, {
    auth, 
    params: {
      next_cursor: req.query.next_cursor
    },
  })
  return res.send(response.data);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
