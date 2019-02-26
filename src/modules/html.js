import fs from 'fs';

class HtmlModule{
    constructor(){
        this._accept = 'html'
    }

    accept(extension){
        return extension === this._accept;
    }

    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.send(content.toString());
    }
}

export default new HtmlModule();