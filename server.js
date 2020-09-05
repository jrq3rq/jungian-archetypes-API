import express from "express";
import mongoose from "mongoose";

import data from "./data.js";
import Videos from "./dbModel.js";
// app config
const app = express();
const port = process.env.PORT || 8080;

// middlewears
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

//db config
const connection_url =
  "mongodb+srv://james-admin:2rTZqoK1xol5cDzV@cluster0.hveis.mongodb.net/jungian?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("Hello amazing world"));

app.get("/v1/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/v2/posts", (req, res) => res.status(200).send(data));

app.post("/v2/posts", (req, res) => {
  const dbProfile = req.body;

  Videos.create(dbProfile, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//listern
app.listen(port, () => console.log(`listening on port: ${port}`));
