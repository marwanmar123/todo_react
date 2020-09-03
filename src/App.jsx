import React, { Component } from 'react';
import Todo from './components/todoItems/todo';
import Add from './components/addItems/add';


class App extends Component {
  state = {
    items : [
      {id:1, name:"maryo", age:20},
      {id:2, name:"mar", age:21},
      {id:3, name:"ryo", age:22}
    ]
  }
  deletItem = (id) => {
    let items = this.state.items.filter(items =>{
      return items.id !==id
    })
    this.setState({items})
  }
  addItem = (item) =>{
    item.id = Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center">todo list by reactjs</h1>
        <Todo items={this.state.items} deletItem={this.deletItem}/>
        <Add addItem={this.addItem}/>
        
      </div>
    );
  }
}

export default App;
