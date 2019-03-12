import fs from 'fs';

class DefaultModule{
    constructor(){ 
        this.accept = /.*/g;
    }

    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath);
        res.send(content.toString());
    }
}

export default new DefaultModule();