import Banner from 'core/banner';
import chalk from 'chalk';
import Commands from 'core/commands';

class Nix{
    constructor({ port, application, routeManager }){
        this.application = application;
        this.port = port;
        this.routeManager = routeManager;
    }

    async commands(){
        let { port } = await Commands.start();

        if(port) this.port = port;
    }

    async start(){
        this.application.use(this.routeManager.routes())
    }

    async serve(){
        await Banner.start();

        this.start();
        
        this.application.listen(this.port, ()=>{
            console.log('\n')
            console.log(chalk.green(`Server running in PORT = ${this.port}`))
        });
    }
}

export default Nix;