import { HOME_MENU_CONTENT } from '../actions/types';
import { cardContent } from '../../dummyData';

const initialState ={
    homeCardContent: cardContent
}

export const homeReducer = (state = initialState, action) =>{
    switch(action.type){
        case HOME_MENU_CONTENT:
            return{
                ...state,
                homeCardContent: action.payload
            }
        default :
        return state;
    }
}