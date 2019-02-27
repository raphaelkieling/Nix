import fs from 'fs';

class JsonModule{
    constructor(){
        this.accept = 'json'
    }
    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.json(JSON.parse(content.toString()));
    }
}

export default new JsonModule();