const getHash = () => 
    // parsear los elemento para obtener el id que le paso en la ruta si no hay devuelve el '/'
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;