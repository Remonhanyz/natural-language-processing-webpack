import path from "path";
import express from "express";
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

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
}

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
    .then(async (res) => ({
      status: await res.status,
      body: await res.json(),
    }))
    .then(async ({
      status,
      body
    }) => {
      // console.log(body)
      const data = {
        score_tag: body.score_tag,
        agreement: body.agreement,
        subjectivity: body.subjectivity,
        confidence: body.confidence,
        irony: body.irony
      }
      res.send(data);
    })
    .catch(async (error) => console.log("error", error));

})


export default app;