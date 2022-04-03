import { ActionTypeUi } from "../action-types"


export const startLoadingComic = () => ({
    type:ActionTypeUi.START_LOADING_COMIC
})
export const finishLoadingComic = () => ({
    type:ActionTypeUi.FINISH_LOADING_COMIC
})
