import HtmlModule from './html';
import JsonModule from './json';
import MarkdownModule from './markdown';
import JavascriptModule from './javascript';
import DefaultModule from './default';
import StaticModule from './static';

import path from 'path';

class Module{
    constructor({ basePath }){
        this.basePath = basePath;
        this.modules = [
            HtmlModule,
            JsonModule,
            MarkdownModule,
            JavascriptModule,
            DefaultModule,
            StaticModule
        ];
    }

    resolveFile(fileModel){        
        return ({ req, res }) => this._resolveFile(fileModel, { req, res });
    }

    _resolveFile(fileModel, { req, res }){
        let findedModule = this.getModuleByExtension(fileModel.ext)
        let pathFile = path.resolve(this.basePath, fileModel.getPath());

        if(!findedModule) return DefaultModule.resolve(pathFile, { req, res })
        
        findedModule.resolve(pathFile, { req, res })
    }

    getModuleByExtension(extension){
        let extensionWithoutDot = extension.replace('.','');
        return this.modules.find(_module =>extensionWithoutDot.match(_module.accept));
    }
}

export default Module;