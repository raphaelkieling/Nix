import '@babel/polyfill';
import RouteManager from 'core/routeManager'
import FileManager from 'core/fileManager';
import PortResolver from 'core/portResolver';
import enviroment from 'core/enviroment';
import App from 'core/server';

import Module from 'modules';

import Nix from 'core'


const optionsModule = {
    basePath: enviroment.basePath
}

const optionsFileManager = {
    basePath: enviroment.basePath
};

const optionsRouteManager = {
    moduleManager: new Module(optionsModule),
    fileManager: new FileManager(optionsFileManager),
    basePath: enviroment.basePath
};

const optionsPortResolver = {
    port: enviroment.port
};

const options = {
    port: new PortResolver(optionsPortResolver).getPort(),
    application: App,
    routeManager: new RouteManager(optionsRouteManager)
};

export default new Nix(options)