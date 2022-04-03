import { ActionTypeUi } from "../action-types";



interface IStartLoadingComic {
    type:ActionTypeUi.START_LOADING_COMIC
}
interface IFinishLoadingComic {
    type:ActionTypeUi.FINISH_LOADING_COMIC
}

export type ActionsUi =
        | IStartLoadingComic
        | IFinishLoadingComic;