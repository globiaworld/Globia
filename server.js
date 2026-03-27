const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // SERVE videos & images

let events = [
  {
    name: "Tech Conference 2026",
    location: "Dubai",
    date: "May 20",
    description: "AI & Innovation",
    video: "videos/tech.mp4"
  },
  {
    name: "Business Summit",
    location: "London",
    date: "June 10",
    description: "Entrepreneurship",
    video: ""
  }
];

app.get("/events", (req,res)=> res.json(events));

app.post("/book", (req,res)=>{
  console.log(req.body);
  res.json({message:"Booked"});
});

app.listen(5000, ()=> console.log("Running on 5000"));
