class Route{
    constructor(filepath){
        this.filepath = filepath;
        this.route = filepath.replace(/\.\w+$/g, '')
    }
}

export default Route;