class Route{
    constructor(fileModel){
        this.file = fileModel;
        this.route = this.getRoute();
    }

    getRoute(){
        return this.file.getPathWithoutExt()
    }
}

export default Route;