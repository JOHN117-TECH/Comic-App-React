import { ActionsComic } from '../actions-interfaces/IActionsComic';
import { ActionsUi } from '../actions-interfaces';
import { ActionTypeComic } from '../action-types/comicTypes';
import { Dispatch } from 'redux';
//import { Toast } from '../../utils/sweetAlertMix';
import { getComicService } from '../../services/comic/comicService';
import { finishLoadingComic, startLoadingComic } from './ui';


export const startLoadingComicData = (comic=1) => async (dispatch:Dispatch<ActionsUi | ActionsComic>) =>{
    try {
        dispatch(startLoadingComic())
        const resp = await getComicService(comic)
        const {data} = resp
        if(resp.status === 200){
            dispatch({
                type:ActionTypeComic.LOAD_COMIC_DATA,
                payload: data
                
            })
            dispatch({
                type:ActionTypeComic.CHANGE_VALUE_RATING,
                payload: 0
                
            })
        }
        setTimeout(() => {dispatch(finishLoadingComic())},2000)
    } catch (error) {
        //Toast.fire({icon:"error",title:`Algo salió mal`})
        //dispatch(finishLoadingList())
        console.log(error)
    }
}

export const changeRatingValue = (value:number) => (dispatch:Dispatch<ActionsComic>) => {
    dispatch({
        type:ActionTypeComic.CHANGE_VALUE_RATING,
        payload: value  
    })

}