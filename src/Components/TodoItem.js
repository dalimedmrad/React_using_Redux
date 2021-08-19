import React from 'react';
import { Table } from 'react-bootstrap';
import {connect} from 'react-redux'
import { completetodo, deletetodo, savetodo } from '../Actions/actions';

const TodoItem = props => {
    return (
        <>
            <tr>
                <td className={props.todo.complete ? 'done' : undefined}>{props.todo.text}</td>
                <td> {props.todo.complete? 'Done !':"not Done !"}  </td>
                <td>
                    <button className="btn btn-info" onClick={()=> props.complete(props.todo.id)}>{props.todo.complete ? 'notDone':'Done'}</button>&nbsp;
                    <button className="btn btn-danger" onClick={()=> props.delete(props.todo.id)}>Delete</button>&nbsp;
                    <button className="btn btn-success" onClick={()=>props.save(props.todo)}>Edit</button>
                </td>
            </tr>
        </>
    )
}


const mapDispatchToProps = dispatch =>{
    return{
        delete : id => dispatch(deletetodo(id)),
        complete:id=> dispatch(completetodo(id)),
        save:todo => dispatch(savetodo(todo))
    }
}
export default connect(null,mapDispatchToProps)(TodoItem);
