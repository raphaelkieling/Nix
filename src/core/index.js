import Banner from 'core/banner';
import chalk from 'chalk';
import chokidar from 'chokidar';
import clear from 'clear';

class Nix {
    constructor({ port, application, routeManager, basePath, watch = false, showDir = false }) {
        this.application  = application;
        this.port         = port;
        this.routeManager = routeManager;
        this.basePath     = basePath;
        this.watch        = watch;
        this.showDir      = showDir;
    }

    listenBaseFolder() {
        var watcher = chokidar.watch(this.basePath, {
            ignored: /[\/\\]\./,
            persistent: true,
            ignoreInitial: true
        });

        watcher
            .on('add', this.restart.bind(this))
            .on('unlink', this.restart.bind(this));
    }
    
    async restart(){
        console.log(chalk.yellow('Changed files!'));
        this.application.http.close();
        this.serve();
    }

    async start() {
        if(this.watch)
            this.listenBaseFolder();
        this.application.app.use(this.routeManager.routes());
    }

    async serve() {
        // clear();
        await Banner.start();

        if(this.showDir)
            console.log(chalk.yellow(`Working in ${this.basePath}`))

        this.start();
        this.application.http.listen(this.port, () => {
            console.log('\n');
            console.log(chalk.green(`Server running in PORT ${this.port}`));
        });
    }
}

export default Nix;