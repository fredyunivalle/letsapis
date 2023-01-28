let weatherLondon = require('./weather')

console.log("Pilotos mayores de 18 años: ");

for(var i=0; i<3; i++){

    if (weatherLondon.weather[0].pilotAffected[i].age >= 18){
        console.log(`Nombre: ${weatherLondon.weather[0].pilotAffected[i].name}`);
    }
}

