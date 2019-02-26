import fs from 'fs';

class MarkdownModule{
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

export default new MarkdownModule();