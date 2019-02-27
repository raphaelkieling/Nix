import fs from 'fs';

class JsonModule{
    constructor(){
        this._accept = 'json'
    }

    accept(extension){
        return extension === this._accept;
    }

    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.json(JSON.parse(content.toString()));
    }
}

export default new JsonModule();