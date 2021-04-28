const Pokemon = () => {
    const view = `
        <div class="Pokemon-inner">
            <articule class="Pokemon-card">
                <img src="image.png" alt="pokemon">
                <h2>Pokemon</h2>
            </articule>
            <articule class="Pokemon-card">
                <h3>Tipo:</h3>
                <h3>Altura:</h3>
                <h3>Peso:</h3>
                <h3>Descripcion:</h3>
            </articule>
        </div>
    `
    return view;
}

export default Pokemon;