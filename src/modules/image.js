import fs from 'fs';

class ImageModule{
    constructor(){
        this.accept = /(gif|jpg|jpeg|tiff|png)/g
    }
    
    async resolve(filepath, { req, res }){
        let content = await fs.readFileSync(filepath)
        res.end(content, 'binary');
    }
}

export default new ImageModule();