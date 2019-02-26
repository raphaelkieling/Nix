class PortResolver{
    getPort(){
        return process.env.PORT || 3001
    }
}

export default new PortResolver()