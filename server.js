const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

/* =========================
   MIDDLEWARE
========================= */
app.use(cors({
  origin: "*", // allow all (you can restrict later)
}));
app.use(express.json());

/* =========================
   STATIC FILES (LOCAL ONLY)
========================= */
app.use(express.static(__dirname));
app.use("/videos", express.static(path.join(__dirname, "videos")));

/* =========================
   EVENTS DATA
========================= */
const events = [
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
    video: "/videos/business.mp4" // make sure file exists
  }
];

/* =========================
   GET EVENTS
========================= */
app.get("/events", (req, res) => {
  res.json(events);
});

/* =========================
   BOOKING ROUTE
========================= */
app.post("/book", (req, res) => {
  try {
    const { name, email, event, ticket } = req.body;

    // Basic validation
    if (!name || !email || !event || !ticket) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    console.log("📩 Booking received:", { name, email, event, ticket });

    res.json({
      success: true,
      message: "Booking successful"
    });

  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Booking failed" });
  }
});

/* =========================
   AI ROUTE
========================= */
app.post("/ai", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: userMessage }]
      })
    });

    const data = await response.json();

    res.json({
      reply: data?.choices?.[0]?.message?.content || "No response"
    });

  } catch (err) {
    console.error("AI error:", err);
    res.status(500).json({ error: "AI request failed" });
  }
});

/* =========================
   HEALTH CHECK
========================= */
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* =========================
   DEFAULT ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("🚀 Globia backend is running");
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
