const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Parse JSON request bodies
app.use(express.json());

// Your Twilio Account SID and Auth Token
const accountSid = 'AC86fb0f6a3d35c98743bb5872e4337d7a';
const authToken = 'ef190a1697cf4acc1beea968ca358582';

const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
    const { phoneNumber, message } = req.body;

    client.messages
        .create({
            body: message,
            from: '+13367927626', // Replace with your Twilio phone number
            to: '+918590353387',
        })
        .then((message) => {
            res.status(200).json({ status: 'SMS sent', messageId: message.sid });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
