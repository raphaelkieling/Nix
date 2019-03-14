import dotenv from 'dotenv';

class Enviroment {
    constructor(){
        this.basePath = process.cwd()
        this.port = process.env.PORT || 3000;

        this.init()
    }

    init(){
        let { parsed } = this.getConfig();
        
        if(!parsed) return;
        if(parsed.PORT) this.port = parsed.PORT;
        if(parsed.BASE_PATH) this.basePath = parsed.BASE_PATH;
    }

    getConfig(){
        let options = { path: '' };

        switch(process.env.NODE_ENV){
            case 'production':
                options = { path: `${this.basePath}/.nix.production` }
            case 'development':
                options = { path: `${this.basePath}/.nix.dev` }
            default:
                options = { path: `${this.basePath}/.nix` }
        }

        return dotenv.config(options)
    }
}

export default new Enviroment();