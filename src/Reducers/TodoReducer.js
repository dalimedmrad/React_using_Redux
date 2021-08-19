import {v4 as uuidv4} from 'uuid';
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO } from '../Actions/types';

const initialState = [
    {
        id:uuidv4(),
        text:'learn Redux',
        complete:false
    },
    {
        id:uuidv4(),
        text:'learn Redux',
        complete:true
    },
    {
        id:uuidv4(),
        text:'learn bb',
        complete:true
    }
]

const TodoReducer = (state = initialState,action) => {
    switch(action.type){
        case EDIT_TODO :
            return state.map(el=> el.id ===  action.payload.id ? action.payload : el)
        case COMPLETE_TODO :
            return state.map(el => el.id === action.payload ? {...el,complete:!el.complete}:el)
        case DELETE_TODO :
            return state.filter(el => el.id !== action.payload)
        case ADD_TODO:
            // return state.concat(action.payload)
            return [...state,action.payload]
        default:
            return state
    }
}
export default TodoReducer;