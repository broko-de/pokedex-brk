const API = 'https://pokeapi.co/api/v2/pokemon/';
const APICHARACTERISTIC = 'https://pokeapi.co/api/v2/characteristic/';

const getData = async (id) =>{
    const apiURL = id ? `${API}${id}`: API;
    try {
        const response  = await fetch(apiURL);
        const resultData = await response.json();
        let data = [];
        if (id){
            data = resultData;
        }else{
            for (const pokemon of resultData.results) {
                let responsePokemon = await fetch(pokemon.url);
                let dataPokemon = await responsePokemon.json();
                data.push(dataPokemon)
            }            
        }
        return data;
    } catch (error) {
        console.error('Fetch error', error)
    }
}

const getDataCharacteristic = async (id) =>{
    try {
        const response  = await fetch(`${APICHARACTERISTIC}${id}`);
        const data = await response.json();        
        return data;
    } catch (error) {
        console.error('Fetch error', error)
    }
}

module.exports = {
    getData,
    getDataCharacteristic
};
