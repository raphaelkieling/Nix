import { Router } from 'express'
import Route from 'domain/route'
import chalk from 'chalk';
import pack from '../../package.json'

class RouteManager{
    constructor({ router, moduleManager, fileManager }){
        this.router = router || Router();
        this.module = moduleManager;
        this.fileManager = fileManager;
        this._line = '------------------';
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
        console.log(chalk.blue(this._line))
        console.log(chalk.blue('Routes'))
        console.log(chalk.blue(this._line))
        let toRouteModel = fileModel => new Route(fileModel);
        let logRoutes = routeModel => {
            console.log(chalk.blueBright(`GET: /${routeModel.route}`));
            return routeModel;
        } 

        let filepaths = this.fileManager.getFilenames();

        let routes = filepaths
            .map(toRouteModel)
            .map(logRoutes);
        
        this.setInitialRoute(routes);

        routes.forEach(this.setRoute.bind(this))

        console.log(chalk.blue(this._line))
            
        return this.router;
    }
}

export default RouteManager;