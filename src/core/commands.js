import commander from 'commander';
import pack from '../../package.json';

export default {
  start: ()=>{
    return new Promise((resolve, reject)=> {
      commander
        .version(pack.version, '-v, --version')
        .option('-p, --port [port]', 'set PORT to run application')
        .parse(process.argv);

        resolve(commander)
    })
  }
};