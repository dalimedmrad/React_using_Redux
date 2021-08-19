import React, { useState } from 'react';
import { Button,Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const [donefilter, setDonefilter] = useState(false);
    return (

        <div>
            <div className="btt">
                <Button className={donefilter?'btn btn-primary':'btn btn-secondary'} onClick={()=>setDonefilter(true)}>Done</Button>&nbsp;
                <Button className={!donefilter?'btn btn-primary':'btn btn-secondary'}  onClick={()=>setDonefilter(false)}>notDone</Button>
            </div>
            <Table className="aa" striped bordered hover>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Done OR notDone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {(donefilter)?props.todos.filter(el=>el.complete===true).map((el) => (<TodoItem todo ={el}/>)):
                    props.todos.filter(el=>el.complete===false).map((el) => (<TodoItem todo ={el} />))} 
                </tbody>
            </Table> 
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        todos:state.TodoReducer
    }
}
export default connect(mapStateToProps)(TodoList);
