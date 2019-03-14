import '@babel/polyfill';
import RouteManager from 'core/routeManager'
import FileManager from 'core/fileManager';
import PortResolver from 'core/portResolver';
import enviroment from 'core/enviroment';
import Application from 'core/server';
import Commands from 'core/commands';
import path from 'path';
import Module from 'modules';
import Nix from 'core'

async function initCommands(){
    return  await Commands.start();
}

export default async() =>{ 
    let { port, watch, dir, showDir } = await initCommands();

    let finalBasePath = dir ? path.resolve(enviroment.basePath, dir) : enviroment.basePath;

    const optionsModule = {
        basePath: finalBasePath
    }

    const optionsFileManager = {
        basePath: finalBasePath
    };

    const optionsRouteManager = {
        moduleManager: new Module(optionsModule),
        fileManager: new FileManager(optionsFileManager),
        basePath: finalBasePath
    };

    const optionsPortResolver = {
        port: enviroment.port
    };

    const options = {
        port: port || new PortResolver(optionsPortResolver).getPort(),
        application: Application,
        routeManager: new RouteManager(optionsRouteManager),
        basePath: finalBasePath,
        watch,
        showDir
    };
    
    return new Nix(options)
} 
