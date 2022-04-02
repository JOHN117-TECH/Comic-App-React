import { ActionTypeUi } from "../action-types";


interface StartLoadingAction {
    type:ActionTypeUi.START_LOADING
}
interface FinishLoadingAction{
    type:ActionTypeUi.FINISH_LOADING
}
interface IStartLoadingComic {
    type:ActionTypeUi.START_LOADING_COMIC
}
interface IFinishLoadingComic {
    type:ActionTypeUi.FINISH_LOADING_COMIC
}

export type ActionsUi =
        | StartLoadingAction 
        | FinishLoadingAction
        | IStartLoadingComic
        | IFinishLoadingComic;