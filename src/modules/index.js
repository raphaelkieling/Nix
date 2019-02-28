import HtmlModule from './html';
import JsonModule from './json';
import MarkdownModule from './markdown';
import JavascriptModule from './javascript';
import path from 'path';

class Module{
    constructor({ basePath }){
        this.basePath = basePath;
        this.modules = [
            HtmlModule,
            JsonModule,
            MarkdownModule,
            JavascriptModule
        ];
    }

    resolveFile(fileModel){        
        return ({ req, res }) => this._resolveFile(fileModel, { req, res });
    }

    _resolveFile(fileModel, { req, res }){
        let findedModule = this.getModuleByExtension(fileModel.ext)

        if(!findedModule) return res.status(500).send({
            message: `Module for > ${extension} < not found`
        })
        
        findedModule
            .resolve(path.resolve(this.basePath, fileModel.getPath()), { req, res })
    }

    getModuleByExtension(extension){
        return this.modules.find(_module => _module.accept === extension.replace('.',''))
    }
}

export default Module;