import { MENU_SHOW, MENU_HIDE } from '../actions/types';

const initialState ={
    displayMenu: false
}

export const headerReducer = (state = initialState, action) =>{
    switch(action.type){
        case MENU_SHOW:
            return {
                ...state,
                displayMenu: true
            }
        case MENU_HIDE:
            return {
                ...state,
                displayMenu: false
            }
        default :
        return state;
    }
}