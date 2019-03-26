import commander from 'commander';
import pack from '../../package.json';

function range(val) {
  return val.split(/\,/g).map(a => a.trim());
}

export default {
  start: () => {
    return new Promise((resolve, reject) => {
      commander
        .version(pack.version, '-v, --version')
        .option('-p, --port [port]', 'set PORT to run application')
        .option('-w, --watch', 'Watch folder')
        .option('-d, --dir [dir]', 'set DIR to work')
        .option('-sd, --show-dir', 'Show current directory')
        .option('-f, --files <a>,<b>,<c>', 'Require files to up', range)
        .parse(process.argv);

      resolve(commander)
    })
  }
};