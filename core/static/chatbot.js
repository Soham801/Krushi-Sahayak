function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let responseElement = document.getElementById("response");

    document.getElementById("chatbotForm").addEventListener("submit", function(event) {
        event.preventDefault();  // ✅ Prevent default GET request
    
        let message = document.getElementById("userInput").value;
        console.log("Submitting chatbot request...");

    
        fetch('/chatbot/', {
            method: 'POST',  // ✅ Ensure method is POST
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCSRFToken()  // ✅ CSRF Token if required
            },
            body: JSON.stringify({ message: message })  // ✅ Send data in JSON format
        })
        .then(response => response.json())
        .then(data => console.log("AI Response:", data.response))
        .catch(error => console.error('Error:', error));
        function getCSRFToken() {
            return document.getElementById("csrf_token").value;
        }
    });
    
    
}
