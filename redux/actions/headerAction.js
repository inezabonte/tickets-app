import { MENU_HIDE, MENU_SHOW } from "./types"

export const headerAction = (value) => dispatch => {
    if(value){
        dispatch({
            type: MENU_SHOW
        })
    }else{
        dispatch({
            type: MENU_HIDE
        })
    }
}