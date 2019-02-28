import { Router } from 'express'
import Route from 'domain/route'
import chalk from 'chalk';
import pack from '../../package.json'

class RouteManager{
    constructor({ router, moduleManager, fileManager }){
        this.router = router || Router();
        this.module = moduleManager;
        this.fileManager = fileManager;
    }

    setInitialRoute(routes){
        let routesToSend = routes.map(route => ({
            file: route.file.getPath(),
            route: `/${route.route}`
        }))
        
        this.router.get('/', (req,res) => {
            res.json({
                message: 'Welcome to Nix',
                version: pack.version,
                routes: routesToSend
            });
        })
    }

    setRoute(routeModel){
        this.router.get(`/${routeModel.route}`, this.module.resolveFile(routeModel.file))
        return routeModel;
    }

    routes(){
        let toRouteModel = fileModel => new Route(fileModel);
        let logRoutes = routeModel => {
            console.log(chalk.blueBright(`GET: /${routeModel.route}`));
            return routeModel;
        } 

        let routes = this.fileManager
            .getFilenames()
            .map(toRouteModel)
            .map(logRoutes)
        
        this.setInitialRoute(routes);

        routes.forEach(this.setRoute.bind(this))
            
        return this.router;
    }
}

export default RouteManager;