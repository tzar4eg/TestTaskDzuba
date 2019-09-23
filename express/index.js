//const cors = require('cors')({origin: true})
const express = require("express");
const compression = require("compression");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors");
const _ = require("lodash");
const _app_folder = "dist/";
const _port = 5001;

const app = express();

app.use(compression());
app.use(
  fileUpload({
    createParentPath: true
  })
);

//add middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/uploads/:img", (req, res) => {
  let img = req.params.img;
  fs.readFile("./uploads/" + img, (err, content) => {
    if (err) {
      res.writeHead(400, { "Content-type": "text/html" });
      res.end("No such image");
    } else {
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});
app.post("/upload", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded"
      });
    } else {
      let image = req.files.image;
      let token = Math.floor(Math.random() * 10000) + "-";
      //Use the mv() method to place the image in upload directory (i.e. "uploads")
      image.mv("./uploads/" + token + image.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: token + image.name,
          mimetype: image.mimetype,
          size: image.size
        }
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("*.*", express.static("dist/", { maxAge: "2y" }));

app.all("*", function(req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

app.listen(_port, function() {
  console.log(
    "Node Express server for " +
      app.name +
      " listening on http://localhost:" +
      _port
  );
});
