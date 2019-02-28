import path from 'path';

class File{
    constructor(filepath){
        this.dir  = '';
        this.base = '';
        this.ext  = '';
        this.name = '';


        this.parse(filepath)
    }

    parse(filepath){
        let parsed = path.parse(filepath)

        if(!parsed) return;

        this.dir  = this.cleanDir(parsed.dir);
        this.base = parsed.base;
        this.ext  = parsed.ext;
        this.name = parsed.name;
    }

    cleanDir(dir){
        return dir.split(path.sep).join('/');
    }

    getPath(){
        if(this.dir) return `${this.dir}/${this.base}`;
        return this.base;
    }

    getPathWithoutExt(){
        if(this.dir) return `${this.dir}/${this.name}`;
        return this.name;
    }
}

export default File;