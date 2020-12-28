import axious from "axios";

export default() =>{
    return axious.create({
        baseURL:'http://localhost:9000'
    })
}