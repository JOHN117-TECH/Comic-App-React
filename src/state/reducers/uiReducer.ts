
import { ActionTypeUi } from '../action-types';
import { ActionsUi } from '../actions-interfaces';

export interface IUiState {
    loading:boolean;
    loadingComic:boolean;

}

const initialState:IUiState = {
    loading:false,
    loadingComic:false,
}


const uiReducer = (state:IUiState=initialState,action:ActionsUi):IUiState => {
    switch (action.type) {
        case ActionTypeUi.START_LOADING:
            return {
                ...state,
                loading:true
                
            }
        case ActionTypeUi.FINISH_LOADING:
            return {
                ...state,
                loading:false
            }
        case ActionTypeUi.START_LOADING_COMIC:
            return {
                ...state,
                loadingComic:true
            }
        case ActionTypeUi.FINISH_LOADING_COMIC:
            return {
                ...state,
                loadingComic:false
            }
        
        default:
            return state;
    }
}

export default uiReducer;