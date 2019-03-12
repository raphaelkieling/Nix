import Banner from 'core/banner';
import chalk from 'chalk';
import chokidar from 'chokidar';
import Commands from 'core/commands';
import clear from 'clear';

class Nix {
    constructor({ port, application, routeManager, basePath }) {
        this.application = application;
        this.port = port;
        this.routeManager = routeManager;
        this.basePath = basePath;
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

    async commands() {
        let { port } = await Commands.start();

        if (port) this.port = port;
    }

    async restart(){
        console.log(chalk.yellow('Changed files!'));
        this.application.http.close();
        this.serve();
    }

    async start() {
        this.listenBaseFolder();
        this.application.app.use(this.routeManager.routes());
    }

    async serve() {
        clear();
        await Banner.start();

        console.log('\n');
        this.start();
        this.application.http.listen(this.port, () => {
            console.log('\n');
            console.log(chalk.green(`Server running in PORT ${this.port}`));
        });
    }
}

export default Nix;