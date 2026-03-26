
const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

// STORAGE CONFIG
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

// STORE VIDEOS
let videos = [];

// UPLOAD ROUTE
app.post("/upload", upload.single("video"), (req, res) => {
  const videoData = {
    title: req.body.title,
    path: req.file.filename
  };

  videos.push(videoData);
  res.json({ message: "Uploaded successfully" });
});

// GET VIDEOS
app.get("/videos", (req, res) => {
  res.json(videos);
});

app.listen(5000, () => console.log("Server running on port 5000"));
