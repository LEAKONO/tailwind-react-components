import React from "react";

const messages = [
  "Keep going, you're doing great!",
  "Believe in yourself.",
  "Small steps every day.",
  "Your efforts matter.",
  "Stay focused and stay positive.",
  "Progress, not perfection.",
  "You are capable of amazing things."
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Daily Motivation 💪
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <p className="text-gray-700 text-lg">{msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
