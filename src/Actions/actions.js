import {ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_TODO, SAVE_TODO, CLEAR} from './types';


export const addTodo = newTodo => {
    return{
        type:ADD_TODO,
        payload:newTodo
    }
}
export const deletetodo = id => {
    return{
        type:DELETE_TODO,
        payload:id
    }
}

export const completetodo = id => {
    return{
        type:COMPLETE_TODO,
        payload:id
    }
}

export const savetodo = todo =>{
    return {
        type:SAVE_TODO,
        payload:todo
    }
}
export const edittodo = updateTodo =>{
    return {
        type:EDIT_TODO,
        payload:updateTodo
    }
} 
export const clearSaved = () =>{
    return {
        type:CLEAR,
    }
}