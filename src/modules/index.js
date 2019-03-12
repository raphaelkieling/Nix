import HtmlModule from './html';
import JsonModule from './json';
import MarkdownModule from './markdown';
import JavascriptModule from './javascript';
import DefaultModule from './default';
import ImageModule from './image';

import path from 'path';

class Module{
    constructor({ basePath }){
        this.basePath = basePath;
        this.modules = [
            HtmlModule,
            JsonModule,
            MarkdownModule,
            JavascriptModule,
            ImageModule,
            DefaultModule
        ];
    }

    resolveFile(fileModel){        
        return ({ req, res }) => this._resolveFile(fileModel, { req, res });
    }

    _resolveFile(fileModel, { req, res }){
        let findedModule = this.getModuleByExtension(fileModel.ext);
        let pathFile = path.resolve(this.basePath, fileModel.getPath());

        if(!findedModule) return res.send(`Module not found for this extension.`)
        
        findedModule.resolve(pathFile, { req, res });
    }

    getModuleByExtension(extension){
        return this.modules.find(_module => extension.match(_module.accept));
    }
}

export default Module;