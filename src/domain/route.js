class Route{
    constructor(filepath){
        this.regex = {
            EXTENSION: /\.\w+$/g,
            DETAILS: /\-|\./g
        };
        this.filepath = filepath;
        this.route = this.filepathToRouteName(filepath);
    }

    filepathToRouteName(filepath){
        filepath = filepath.replace(this.regex.EXTENSION, '');
        filepath = filepath.replace(this.regex.DETAILS,'_') 

        return filepath;
    }
}

export default Route;