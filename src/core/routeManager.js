import { Router } from 'express'
import read from 'fs-readdir-recursive';
import fs from 'fs';
import chalk from 'chalk';
import Route from 'domain/route';
import Module from 'modules';

class RouteManager{
    constructor({ router, basePath, module }){
        this.router = router;
        this.basePath = basePath || process.cwd();
        this.module = module;
    }
    
    getFilenames(){
        return read(this.basePath);
    }

    setRoute(routeModel){
        this.router.get(`/${routeModel.route}`, this.module.resolveFile(`${this.basePath}/${routeModel.filepath}`))
        return routeModel;
    }

    routes(){
        let toRouteModel = filename => new Route(filename);
        let clearFilename = filename =>  filename.replace(/(\\\\)|(\\)/g,'/');
        let logRoutes = routeModel => {
            console.log(chalk.blueBright(`GET: /${routeModel.route}`));
            return routeModel;
        } 

        this.getFilenames()
            .map(clearFilename)
            .map(toRouteModel)
            .map(logRoutes)
            .forEach(this.setRoute.bind(this))

        return this.router;
    }
}

export default new RouteManager({
    router: Router(),
    module: Module
});