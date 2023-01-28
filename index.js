const https = require('https');

const userId = 2;
const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

let name 
let phone
let city
let catchPhrase

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        name = user.name
        phone = user.phone
        city = user.city
        catchPhrase = user.catchPhrase
        console.log(`Nombre: ${name}`);
        console.log(`Telefono: ${phone}`);
        console.log(`Ciudad: ${city}`);
        console.log(`catchPhrase: ${catchPhrase}`);
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});
