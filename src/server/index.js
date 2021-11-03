import path from 'path'
import express from 'express'
import mockAPIResponse from './mockAPI.js'
import dotenv from 'dotenv'
import fetch from "node-fetch"

const app = express()
// var FormData = require('form-data');

// var textapi = new meaningcloud({
//     application_key: process.env.API_KEY
// });

// const formdata = new FormData();
// formdata.append("key", process.env.API_KEY);
// formdata.append("txt", "YOUR TEXT HERE");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

const requestOptions = {
  method: 'POST',
  body: {
    "key": process.env.API_KEY,
    "txt": "YOUR TEXT HERE",
    "lang": "en",
  },
  redirect: 'follow'
};

const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));





  



app.use(express.static('dist'))
  
console.log(__dirname)
  
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

dotenv.config();

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
