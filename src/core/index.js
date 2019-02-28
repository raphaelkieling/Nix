import Banner from 'core/banner';
import chalk from 'chalk';
import Commands from 'core/commands';
import { Spinner } from 'cli-spinner'


class Nix{
    constructor({ port, application, routeManager }){
        this.application = application;
        this.port = port;
        this.routeManager = routeManager;
        this.loader = new Spinner('processing.. %s');
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

        this.loader.start();

        setTimeout(()=>{
            this.loader.stop();
            console.log('\n')
            this.start();
            this.application.listen(this.port, ()=>{
                console.log('\n')
                console.log(chalk.green(`Server running in PORT ${this.port}`))
            });
        }, 1000);
    }
}

export default Nix;