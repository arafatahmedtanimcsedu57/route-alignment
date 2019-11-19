import RouteRealignment from '../RouteRealignment';
import Edit from '../Edit';

const routes = [
    {
        name: 'routeRealignment',
        path: '/route-realignment',
        component: RouteRealignment,
        exact: true
    }, {
        name: 'edit',
        path: '/route-realignment/:id',
        component: Edit,
        exact: true
    }
];

function routePath(name, args = null) {
    let route = routes.find(route => route.name === name);

    if (route === undefined) return '';
    if (args === null) return route.path;

    return Object.keys(args).reduce(
        (path, arg) => path.replace(':' + arg, args[arg]),
        route.path
    );
}

export default routes;

export { routePath };