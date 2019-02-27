import fs from 'fs';

import HtmlModule from './html';
import JsonModule from './json';
import MarkdownModule from './markdown';
import JavascriptModule from './javascript';

class Module{
    constructor(){
        this.regex = { EXTENSION: /\.\w+$/g };
        this.modules = [
            HtmlModule,
            JsonModule,
            MarkdownModule,
            JavascriptModule
        ]
    }

    resolveFile(filepath){        
        return ({ req, res }) => this._resolveFile(filepath, { req, res });
    }

    _getExtension(filepath){
        let match = filepath.match(this.regex.EXTENSION)
        return match ? match[0].replace('.','') : null;
    }

    _resolveFile(filepath, { req, res }){
        let extension    = this._getExtension(filepath);
        let findedModule = this.getModuleByExtension(extension)

        if(!findedModule) return res.status(500).send({
            message: `Module for > ${extension} < not found`
        })
        
        findedModule
            .resolve(filepath, { req, res })
    }

    getModuleByExtension(extension){
        return this.modules.find(_module => _module.accept === extension)
    }
}

export default new Module();