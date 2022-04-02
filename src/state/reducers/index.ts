import { combineReducers } from "redux"
import comicReducer from "./comicReducer";
import uiReducer from "./uiReducer";


const reducers = combineReducers({
    ui:uiReducer,
    Comic: comicReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;