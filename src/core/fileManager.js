import read from 'fs-readdir-recursive';

class FileManager{
    constructor({ basePath }){
        this.basePath = basePath;
        this.regex = {
            CLEAR: /(\\\\)|(\\)/g
        }
    }

    getFilenames(){
        return read(this.basePath);
    }

    clearFilename(filename){
        return filename.replace(this.regex.CLEAR,'/');
    }
    
}

export default FileManager;