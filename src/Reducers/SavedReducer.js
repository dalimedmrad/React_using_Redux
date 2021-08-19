import { CLEAR, SAVE_TODO } from "../Actions/types"

const SavedReducer = (state = null, action) =>{
    switch(action.type){
        
        case SAVE_TODO : 
            return action.payload
        case CLEAR:
            return null
        default:
            return state
    }
}

export default SavedReducer;