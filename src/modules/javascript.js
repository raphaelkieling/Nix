import fs from 'fs';
import * as babel from '@babel/core';
import Module from 'module';

class JavascriptModule{
    constructor(){
        this.accept = /js/g
    }

    async resolve(filepath, { req, res }){
        let contentBuffer = await fs.readFileSync(filepath);

        let result = babel.transform(contentBuffer.toString(), {
            presets: ["@babel/preset-env"]
        });

        let nodeModulesPaths = Module._nodeModulePaths(process.cwd());

        let moduleInstance = new Module('', module.parent);

        moduleInstance.paths = nodeModulesPaths;

        moduleInstance._compile(result.code,'');
        moduleInstance.exports.default({ req,res });
    }
}

export default new JavascriptModule();