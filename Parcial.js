const https = require('https');
const url = `https://api.breakingbadquotes.xyz/v1/quotes/10`;

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const quotes = JSON.parse(data);
    Saul = [];
    for (let i in quotes) {
        if(quotes[i].author == "Saul Goodman"){
            Saul.push(quotes[i]);
        }
    }
    console.log(Saul);
  });
}).on('error', (err) => {
  console.log(`Error: ${err.message}`);
});
