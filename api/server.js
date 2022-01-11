const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { json } = require("body-parser");
const axios = require("axios");

const serverless = require('serverless-http')



const app = express();




app.use(cors());
app.use(json());

const router = express.Router();

const { parsed: config } = dotenv.config();

const BASE_URL =`https://api.cloudinary.com/v1_1/${config.CLOUD_NAME}/resources/image`
const auth = { 
              username: config.API_KEY,
              password: config.API_SECRET,
              
               }

router.get("/photos", async (req, res) => {
  const response = await axios.get(BASE_URL, {
    auth, 
    params: {
      next_cursor: req.query.next_cursor
    },
  })
  return res.send(response.data);
});


router.get('/test', (req, res) => {
  res.json({
    "hello": 'test'
  })
})

app.use('/.netlify/functions/api', router);
const PORT = 7000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));




module.exports.handler = serverless(app)