//Se encarga de tomar la ruta y determinar a que template debe redirigirse
const resolveRoutes = (route) => {
    // verificamos que la ruta obtenida por el hash, si es valor a un id o bien a un '/'
    //Como los caracteres para obtener el ID no superan a los 4 
    if(route.length <= 3){
        //devuelvo un / o bien :id de acuerdo al valor de route, se garantiza que no se tenga un valor aleatorio
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`;
}

export default  resolveRoutes