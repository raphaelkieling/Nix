import { ncp } from 'ncp';
import chalk from 'chalk';
import path from 'path';

class Builder{
    constructor({ basePath }){
        this.basePath = basePath;
        this.buildFolder = '.nix-build'
    }

    createBuildFolder(){
        ncp(this.basePath, path.resolve(`${__dirname}/../../`, this.buildFolder), (err)=>{
            if(err) return console.log(err);
            console.log(chalk.yellow('Build created.'))
        })
    }

    getPathBuild(){
        return path.resolve(this.basePath, this.buildFolder);
    }
}

export default Builder;