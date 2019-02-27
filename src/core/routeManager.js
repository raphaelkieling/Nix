import { Router } from 'express'
import Route from 'domain/route'
import chalk from 'chalk';
import pack from '../../package.json'

class RouteManager{
    constructor({ router, module, fileManager, basePath }){
        this.router = router || Router();
        this.module = module;
        this.fileManager = fileManager;
        this.basePath = basePath;
    }

    setInitialRoute(routes){
        let routesToSend = routes.map(route => ({
            file: route.filepath,
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
        this.router.get(`/${routeModel.route}`, this.module.resolveFile(`${this.basePath}/${routeModel.filepath}`))
        return routeModel;
    }

    routes(){
        let toRouteModel = filename => new Route(filename);
        let clearFilename = filename => this.fileManager.clearFilename(filename)
        let logRoutes = routeModel => {
            console.log(chalk.blueBright(`GET: /${routeModel.route}`));
            return routeModel;
        } 

        let routes = this.fileManager
            .getFilenames()
            .map(clearFilename)
            .map(toRouteModel)
            .map(logRoutes)
        
        this.setInitialRoute(routes);

        routes.forEach(this.setRoute.bind(this))
            
        return this.router;
    }
}

export default RouteManager;