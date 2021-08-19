import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, clearSaved, edittodo } from '../Actions/actions';
import {v4 as uuidv4} from 'uuid';


export class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:''
        }
        
    }

    
    handleChange = e =>{
        this.setState({text:e.target.value})
    }
   
    
    addOrEdit = () =>{
        if(this.props.saved){
            this.props.edit(this.state);
            this.setState({text:''});
            this.props.clear();

        }else{
        this.props.addNewTodo({
            id:uuidv4(),
            text:this.state.text,
            complete:false})
            this.setState({text:''})
        }
    }

     componentWillReceiveProps(nextProps){
        this.setState(nextProps.saved)
    }
    
    render() {
        return (
            <div className="form-group aa">
                <input className="form-control " type="text" value={this.state.text} onChange={this.handleChange} /><br></br>
                <button disabled={!this.state.text} className={this.props.saved ? 'btn btn-success':'btn btn-primary'} onClick={this.addOrEdit}>{this.props.saved ? 'Edit' : 'Add'}</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        addNewTodo: todo => dispatch(addTodo(todo)),
        edit: todo => dispatch(edittodo(todo)),
        clear: () => dispatch(clearSaved())
    }
}

const mapStateToProps = state => {
    return{
        saved: state.SavedReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);
