import figlet from 'figlet';

export default {
    start: () => {
        return new Promise((resolve, reject)=>{
            figlet('NIX', (err, data)=>{
                console.log(data);
                resolve()
            });
        })
    }
} 