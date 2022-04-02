import { ComicInterface } from '../../interfaces/Icomic';
import { ActionTypeComic } from '../action-types/comicTypes';

interface ILoadComic {
    type:ActionTypeComic.LOAD_COMIC_DATA
    payload:ComicInterface

}

interface IChangeRating {
    type:ActionTypeComic.CHANGE_VALUE_RATING
    payload:number

}
export type ActionsComic =
        | ILoadComic
        | IChangeRating


