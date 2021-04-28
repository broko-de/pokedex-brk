import Header from '../templates/Header';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/' : Home,
    '/:id': Pokemon,
    '/contact': 'Contacto',
}

/* 
    Logica de manejador de rutas
*/
const router = async () => {
    //seteo los elementos donde voy a hacer render
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    //Empujamos el Header dentro del elemento con await para que espero lo que tenga que tardarse Header()
    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    //renderizo la vista, si existe el route dentro del array routes la devuelvo si no un error404
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();

}

export default router;