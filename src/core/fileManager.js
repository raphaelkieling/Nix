import read from 'fs-readdir-recursive';
import File from 'domain/file';
import path from 'path';

class FileManager{
    constructor({ basePath }){
        this.basePath = basePath;
    }

    getFilenames(){
        let toFileModel = filepath => new File(filepath);

        return read(this.basePath)
            .map(this.clearFilename)
            .map(toFileModel)
    }

    clearFilename(filename){
        filename = path.normalize(filename);
        let filenameSplited = filename.split(path.sep);

        return filenameSplited.join('/');
    }
    
}

export default FileManager;