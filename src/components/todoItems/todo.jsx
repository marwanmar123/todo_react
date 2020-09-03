import React from 'react'
import './todo.css'

const Todo = (props) =>{
    const {items, deletItem} = props;
    let length = items.length;
    const listItems = length ? (
        items.map(item => {
            return(
                <div key={item.id}>
                    <span className="names">{item.name}</span>
                    <span className="ages">{item.age}</span>
                    <span className="option" onClick={ () => deletItem(item.id)}>&times;</span>
                </div>
            )
        }) 
    ): (
        <p>No item</p>
    )
    return (
        <div>
            <div className="list">
                <span className="names">name</span>
                <span className="ages">age</span>
                <span className="option">option</span>
            </div>
            {listItems}
        </div>
    )
}

export default Todo;