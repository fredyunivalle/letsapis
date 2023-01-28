const https = require('https');

const userId = 10;
const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

let city
let catchPhrase

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        city = user.address["city"]
        catchPhrase = user.company["catchPhrase"]
        console.log(`City: ${city}`);
        console.log(`CatchPhrase: ${catchPhrase}`);
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});




