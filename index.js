const https = require('https');

const userId = 2;
const url = `https://api.breakingbadquotes.xyz/v1/quotes/${userId}`;

let quote
let author

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        quote = user.quote
        author = user.author
        console.log(`Quote: ${quote}`);
        console.log(`Autor: ${author}`);
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});
