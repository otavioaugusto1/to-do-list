import React from 'react'
import './ListItems.css'
export default function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>{
        return <div className="list" key={item.key}>
            <p>
                <input 
                    type='text'
                    id={item.key} 
                    value='{item.text}'
                    onChange= {
                        (e) => {
                            props.setUpdate(e.target.value,item.key)
                        }
                    }
                ></input>
                <span>
                <button className='excluir' onClick= {
                    () => props.deleteItem(item.key)
                }>Excluir</button>
                </span>
            </p>
            
        </div>
    })
    return(
        <div>{listItems}</div>
        
    )
}