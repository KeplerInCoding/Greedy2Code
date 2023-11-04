'use strict';

/**
 * Add a click event listener to the SOS button
 */
const sosButton = document.getElementById('sos-button');

sosButton.addEventListener('click', () => {
    sendSms();
});

/**
 * Function to send an SMS
 */
function sendSms() {
    const phoneNumber = '+918590353387'; // Replace with the recipient's phone number
    const message = 'This is an emergency alert!';

    fetch('/send-sms', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, message }),
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Failed to send SMS');
        }
    })
    .then((data) => {
        alert('SOS alert sent!');
    })
    .catch((error) => {
        console.error('Error sending SOS alert:', error);
    });
}
