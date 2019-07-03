import {SET_CURRENT_USER} from '../actions/types'

const initialState ={
     isAuthenticated:false,
     user:{}
 }

 const isEmpty = (value) => {
    return (
        value===undefined || value===null  ||
        (typeof value ==='object' && Object.keys(value).length ===0) ||
        (typeof value==='String' && value.trim().length===0)
    )
}

//Specify the action inside the specific component and the reducer with that type will fire automatically
 export default function(state=initialState,action){
     switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:!isEmpty(action.payload),
                user:action.payload
            }
        default:
            return state
     }

 }