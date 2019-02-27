import fs from 'fs';

class JavascriptModule{
    constructor(){
        this.accept = 'js'
    }
    async resolve(filepath, { req, res }){
        require(filepath)({req, res})
    }
}

export default new JavascriptModule();