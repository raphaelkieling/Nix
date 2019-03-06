import fs from 'fs';

class StaticModule{
    constructor(){
        this.accept = /png/g
    }
    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.send(content);
    }
}

export default new StaticModule();