import React, {Component} from 'react'
import './add.css'

class Add extends Component {
    state = {
        name: '',
        age: ''
    }
    handlechange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name: '',
            age: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="enter name" id="name" onChange={this.handlechange} value={this.state.name}/>
                    <input type="number" placeholder="enter age" id="age" onChange={this.handlechange} value={this.state.age}/>
                    <input type="submit" value="add"/>
                </form>
            </div>
        )
    }
}
    

export default Add;