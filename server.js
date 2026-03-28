const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ Serve static frontend files */
app.use(express.static(path.join(__dirname)));

/* ✅ Serve videos properly */
app.use("/videos", express.static(path.join(__dirname, "videos")));

/* EVENTS DATA */
let events = [
  {
    name: "Tech Conference 2026",
    location: "Dubai",
    date: "May 20",
    description: "AI & Innovation",
    video: "/videos/tech.mp4"
  },
  {
    name: "Business Summit",
    location: "London",
    date: "June 10",
    description: "Entrepreneurship",
    video: ""
  }
];

/* ✅ GET EVENTS */
app.get("/events", (req, res) => {
  res.json(events);
});

/* ✅ KEEP BOOKING ROUTE (for logs / future database) */
app.post("/book", (req, res) => {
  console.log("📩 Booking received:", req.body);
  res.json({ message: "Booked successfully" });
});

/* ✅ HEALTH CHECK (VERY IMPORTANT for Render) */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* START SERVER */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
