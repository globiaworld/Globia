const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Serve all static files (HTML, CSS, images, videos, etc.)
app.use(express.static(__dirname));

// ✅ IMPORTANT FIX: explicitly serve the videos folder
app.use("/videos", express.static(__dirname + "/videos"));

let events = [
  {
    name: "Tech Conference 2026",
    location: "Dubai",
    date: "May 20",
    description: "AI & Innovation",
    video: "tech.mp4"
  },
  {
    name: "Business Summit",
    location: "London",
    date: "June 10",
    description: "Entrepreneurship",
    video: ""
  }
];

// GET events
app.get("/events", (req, res) => {
  res.json(events);
});

// POST booking
app.post("/book", (req, res) => {
  console.log("Booking received:", req.body);
  res.json({ message: "Booked successfully" });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
