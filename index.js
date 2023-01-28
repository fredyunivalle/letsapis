let weatherLondon = require('./weather')

console.log("Personas piloto con mas de 18 años: ");

//Bucle para recorrer arreglo
for(var i=0; i<3; i++){

    //Condicional
    if (weatherLondon.weather[0].pilotAffected[i].age >= 18){
        console.log(`Nombre: ${weatherLondon.weather[0].pilotAffected[i].name}`);
    }
}