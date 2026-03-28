const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // ✅ Load env variables

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ Serve static frontend files */
app.use(express.static(path.join(__dirname)));

/* ✅ Serve videos properly */
app.use("/videos", express.static(path.join(__dirname, "videos")));

/* =========================
   🔥 OPENROUTER AI SETUP
========================= */
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

/* AI ROUTE */
app.post("/ai", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "user", content: userMessage }
        ]
      })
    });

    const data = await response.json();

    res.json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

/* =========================
   📅 EVENTS DATA
========================= */
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

/* GET EVENTS */
app.get("/events", (req, res) => {
  res.json(events);
});

/* =========================
   📩 BOOKING SYSTEM
========================= */
app.post("/book", (req, res) => {
  try {
    const booking = req.body;

    console.log("📩 Booking received:", booking);

    // Optional: store booking in memory
    // You can later connect database or email

    res.json({
      success: true,
      message: "Booking received successfully"
    });

  } catch (error) {
    console.error("Booking Error:", error);
    res.status(500).json({
      success: false,
      message: "Booking failed"
    });
  }
});

/* =========================
   🧪 TEST ROUTE
========================= */
app.get("/health", (req, res) => {
  res.json({ status: "Server running OK" });
});

/* =========================
   🏠 FRONTEND ENTRY
========================= */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/* =========================
   🚀 START SERVER
========================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
