const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")("YOUR_STRIPE_SECRET_KEY");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" });

/* IN-MEMORY DATABASE (can upgrade later) */
let events = [];

/* ADD EVENT */
app.post("/add-event", (req, res) => {
  events.push(req.body);
  res.json({ message: "Event added" });
});

/* GET EVENTS */
app.get("/events", (req, res) => {
  res.json(events);
});

/* DELETE EVENT */
app.post("/delete-event", (req, res) => {
  events.splice(req.body.index, 1);
  res.json({ message: "Deleted" });
});

/* STRIPE */
app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Conference Ticket" },
        unit_amount: req.body.price * 100
      },
      quantity: 1
    }],
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000"
  });

  res.json({ id: session.id });
});

/* AI */
app.post("/chat", async (req, res) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: req.body.message }]
  });

  res.json({ reply: completion.choices[0].message.content });
});

app.listen(5000, () => console.log("Server running on 5000"));
