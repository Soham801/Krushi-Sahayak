async function sendMessage() {
    const message = document.getElementById("user-input").value;  // Get user input
    console.log("Sending message:", message);

    const response = await fetch("http://127.0.0.1:8000/chatbot/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();
    console.log("Response:", data);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("chatbot.js loaded");  // This should appear in Console (F12)
});
