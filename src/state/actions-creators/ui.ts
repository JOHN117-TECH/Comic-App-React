import { ActionTypeUi } from "../action-types"



export const startLoading = () =>({
    type:ActionTypeUi.START_LOADING
})
export const finishLoading = () => ({
    type:ActionTypeUi.FINISH_LOADING
})
export const startLoadingComic = () => ({
    type:ActionTypeUi.START_LOADING_COMIC
})
export const finishLoadingComic = () => ({
    type:ActionTypeUi.FINISH_LOADING_COMIC
})
