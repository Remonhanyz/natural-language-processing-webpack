import path from "path";
import express from "express";
import mockAPIResponse from "./mockAPI.js";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";

//express
const app = express();
//cors
app.use(cors());
//.env
dotenv.config();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
//use static folder
app.use(express.static("dist"));
//port no.
let port = 8081;

let url;
console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.post("/posturl", (req, res) => {
  //request data
  console.log(req.body.url)
  const requestOptions = {
    method: "POST",
    body: {
      key: process.env.API_KEY,
      url: req.body.url,
      lang: "en",
    },
    redirect: "follow",
  };

  async function getData() {
    try {
      const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions);
      return response
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }

  getData()
    .then((response) => ({
      status: response.status,
      body: response.json(),
    }))
    .then(({
      status,
      body
    }) => {
      console.log(body)
      res.send(body);
    })
    .catch((error) => console.log("error", error));

})

// .then((response) => ({
//   status: response.status,
//   body: response.json(),
// }))
// .then(({
//   status,
//   body
// }) => console.log(status, body))
// .catch((error) => console.log("error", error));

// designates what port the app will listen to for incoming requests

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

export default app;