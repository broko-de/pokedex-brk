 import router from './routes';

 //verificamos si la pagina se cargo completamente y envio la funcion del router
 window.addEventListener('load',router);
 //evento para escuchar las rutas, cuando ocurre un cambio de hash
 window.addEventListener('hashchange',router);