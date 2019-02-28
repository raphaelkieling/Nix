import read from 'fs-readdir-recursive';
import File from 'domain/file';
import path from 'path';

class FileManager{
    constructor({ basePath }){
        this.basePath = basePath;
    }

    _filterFile(path){
        let test = new RegExp(/node_modules/g).test(path);
        return !test;
    }

    getFilenames(){
        let toFileModel = filepath => new File(filepath);

        return read(this.basePath, this._filterFile)
            .map(this._clearFilename)
            .map(toFileModel);
    }

    _clearFilename(filename){
        filename = path.normalize(filename);
        let filenameSplited = filename.split(path.sep);

        return filenameSplited.join('/');
    }
    
}

export default FileManager;