// 🌍 GLOBAL AI FUNCTION

async function askAI(message){
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: "You are an AI assistant for Globia, a global conference, tourism and job platform. Help users with bookings, travel advice, and professional guidance."
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await res.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.log("AI Error:", error);
    return "⚠️ AI is unavailable right now.";
  }
}
