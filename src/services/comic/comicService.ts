import { ComicInterface } from "../../interfaces/Icomic";
import { axiosInstance } from "../../utils/axiosInstance";


const getComicService = (comic:number) =>{
    return axiosInstance.get<ComicInterface>(`${process.env.REACT_APP_URL_COMIC}${comic}`)
}

export {
    getComicService
}