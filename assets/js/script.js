'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});





// alert sms

// Import the Twilio module
const twilio = require('twilio');

// Initialize Twilio client with your Account SID and Auth Token
const client = new twilio('AC86fb0f6a3d35c98743bb5872e4337d7a', 'edb03f020d9f0a83a2355ff4f25df607');

// Define a function to send an SMS alert
function sendAlert() {
  client.messages.create({
    body: 'This is an emergency alert!',
    from: '<YOUR_TWILIO_PHONE_NUMBER>', // Your Twilio phone number
    to: '+1234567890+13367927626', // Replace with the recipient's phone number
  })
  .then(message => console.log(`Alert sent with SID: ${message.sid}`))
  .catch(error => console.error(`Error sending alert: ${error.message}`));
}

// Handling the SOS button
const sosButton = document.getElementById('sos-button');
sosButton.addEventListener('click', () => {
    sendAlert(); // Call the function to send the alert
    alert('SOS alert sent!');
});
