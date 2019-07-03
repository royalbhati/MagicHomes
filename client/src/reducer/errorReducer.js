import {GET_ERROR} from '../actions/types'

const initialState ={}

//Specify the action inside the specific component and the reducer with that type will fire automatically
 export default function(state=initialState,action){
     switch(action.type){
        case GET_ERROR:
            return action.payload
        default:
            return state
     }

 }