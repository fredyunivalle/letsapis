const https = require('https');

const userId = 3;
const url = `https://api.breakingbadquotes.xyz/v1/quotes/${userId}`;

let name 
let phone
let continuar = false

https.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        const user = JSON.parse(data);
        name = user[0].author;
        phone = user[0].quote;
        if (name === "Saul Goodman")
        {
            console.log(`Nombre: ${name}`);
            console.log(`quote: ${phone}`);
        }
        else
        {
            continuar = true;
            /*
            while (continuar)
            {
                fetch(url)
                    .then((response) => response.json())
                    .then((data) => {
                        const user2 = JSON.parse(data)
                        if (user2[0].author === "Saul Goodman")
                        {
                            name = user[0].author;
                            phone = user[0].quote;
                            console.log(`Nombre: ${name}`);
                            console.log(`quote: ${phone}`);
                            continuar = false;
                        }
                })
                    .catch((error) => console.log(error));
                console.log(name);
                continuar = false;
            }
            */
           console.log("Itere de nuevo")
        }
    });
}).on('error', (err) => {
    console.log(`Error: ${err.message}`);
});



