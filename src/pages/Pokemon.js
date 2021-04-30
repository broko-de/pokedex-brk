import getHash from '../utils/getHash';
import {getData, getDataCharacteristic} from '../utils/getData';

const Pokemon = async () => {
    const id = getHash();
    const pokemon = await getData(id);
    const characteristic = await getDataCharacteristic(id);
    const view = `
        <div class="Pokemons-inner">
            <articule class="Pokemons-card">
                <img src="${pokemon.sprites.other.dream_world.front_default}" alt="pokemon">
                <h2>${pokemon.name}</h2>
            </articule>
            <articule class="Pokemons-card">
                <h3>Tipo: <span>${pokemon.types.map(type => `${type.type.name} `).join('')}</span></h3>
                <h3>Altura: <span>${pokemon.height} feet</span></h3>
                <h3>Peso: <span>${pokemon.weight} Kg</span></h3>
                <h3>Descripcion: <span>${characteristic.descriptions[1].description}</span></h3>
            </articule>
        </div>
        <div class="botones">
            <div class="circulo"></div>
            <div class="rectangulo"></div>
            <div class="rectangulo-2"></div>

        </div>
    `
    return view;
}

export default Pokemon;