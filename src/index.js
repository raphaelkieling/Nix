import '@babel/polyfill';
import App from 'core/server';
import Commands from 'core/commands';
import Banner from 'core/banner';
import PortResolver from 'core/portResolver';
import chalk from 'chalk';

class Nix{
    constructor({ port, application }){
        this.application = application;
        this.port = port
    }

    async commands(){
        let { port } = await Commands.start();
        if(port) this.port = port;
    }

    async serve(){
        await Banner.start();
        
        this.application.initRouter();
        
        this.application.instance.listen(this.port, ()=>{
            console.log(chalk.green(`Server running in ${this.port}`))
        });
    }
}

const options = {
    port: PortResolver.getPort(),
    application: App
}

export default new Nix(options);