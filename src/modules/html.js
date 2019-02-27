import fs from 'fs';

class HtmlModule{
    constructor(){
        this.accept = 'html'
    }

    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.send(content.toString());
    }
}

export default new HtmlModule();