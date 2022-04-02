
import { ComicInterface } from '../../interfaces/Icomic';
import { ActionTypeComic } from '../action-types';
import { ActionsComic } from '../actions-interfaces/IActionsComic';


export interface IComicState {
    comicData:ComicInterface;
    ratingValue: number,

}

const initialState:IComicState = {
    comicData: {
        month:  '',
        num:       0,
        link:       '',
        year:       '',
        news:       '',
        safe_title: '',
        transcript: '',
        alt:        '',
        img:        '',
        title:      '',
        day:        '',
      },
    ratingValue:0
}


const comicReducer = (state:IComicState=initialState,action:ActionsComic):IComicState => {
    switch (action.type) {
        case ActionTypeComic.LOAD_COMIC_DATA:
            return {
                ...state,
                comicData:{
                    ...state.comicData,
                    ...action.payload
                }

            }
            case ActionTypeComic.CHANGE_VALUE_RATING:
                return {
                    ...state,
                    ratingValue: action.payload
                }
    
        default:
            return state;
    }
}

export default comicReducer;