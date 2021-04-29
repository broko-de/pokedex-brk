import {getData} from '../utils/getData';


const Home = async () => {
    const pokemons = await getData();
    const view = `
        <div class="Pokemons">
            ${pokemons.map(pokemon => `
                <articule class="Pokemons-item">
                    <a href="#/${pokemon.id}">
                        <img src="${pokemon.sprites.front_default}" alt="image">
                        <h2>${pokemon.name}</h2>
                    </a>
                </articule>
            `).join('')}
        </div>
    `;
    return view;
}

export default Home;

