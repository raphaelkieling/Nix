import fs from 'fs';
import marked from 'marked';

class MarkdownModule{
    constructor(){
        this.accept = /md/g
    }
    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.send(marked(content.toString()));
    }
}

export default new MarkdownModule();