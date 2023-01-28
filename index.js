const https = require('https');
const url = `https://api.breakingbadquotes.xyz/v1/quotes`;

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const quotes = JSON.parse(data);
        quotes.forEach((quote) => {
            if (quote.author === 'Saul Goodman') {
                console.log(quote.quote);
            }
        });
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});
