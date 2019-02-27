import fs from 'fs';
import * as babel from '@babel/core';
import Module from 'module';

class JavascriptModule{
    constructor(){
        this.accept = 'js'
    }
    async resolve(filepath, { req, res }){
        let contentBuffer = await fs.readFileSync(filepath);

        let result = babel.transform(contentBuffer.toString(), {
            presets: ["@babel/preset-env"]
        });

        let moduleInstance = new Module('', module.parent);

        moduleInstance._compile(result.code,'');
        moduleInstance.exports.default({ req,res });
    }
}

export default new JavascriptModule();