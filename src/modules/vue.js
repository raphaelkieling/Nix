import Vue from 'vue';
import * as VueServerRenderer from 'vue-server-renderer'

class VueModule{
    constructor(){
        this.accept = 'vue'
    }
    async resolve(filepath, { req, res }){
        // let contentFile = require(filepath);

        
        // Vue.component('generated', {
        //     template: contentFile
        // })

        
        // const app = new Vue({ 
        //     template: `<div><generated/></div>`,
        //     comments:{

        //     }
        //  });

        // const renderer = VueServerRenderer.createRenderer();

        // renderer
        //     .renderToString(app)
        //     .then((html)=> res.send(html))

    }
}

export default new VueModule();