import React from 'react';
import './App.css';
import ListItems from './ListItems'
import './ListItems.css'
import Header from './Components/Header'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key:Date.now()
        }
      })
    } 
    addItem(e){
      e.preventDefault() // tirando o comportamento padrão de atualizar a página ao clicar
      const newItem = this.state.currentItem;
      console.log(newItem)
      if(newItem.text !== ''){
        const newItems = [...this.state.items,newItem] // desempacota e armazena
        this.setState({
          items:newItems,
          currentItem:{
            text:'',
            key:''
          }
        })
      }
    }
    deleteItem(key){
      const filteredItems = this.state.items.filter(item =>
        item.key!==key);
        this.setState({
          items:filteredItems
        })
        //Exclusão do item clicado!
    }
    setUpdate(text,key){
      const items= this.state.items
      items.map(item =>{
        if(item.key===key){
          item.text = text
        }
      })
      this.setState({
        items:items
      })
    }
  render(){
    return(
      <div className='App'>
          <Header></Header>
          <header>  
          <form id= "to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder='Digite algo...' value={this.state.currentItem.text}
             onChange={this.handleInput}></input>
            <button type="submit">Adicionar!</button>
          </form>
        </header>
        <ListItems items = {this.state.items}
        deleteItem = {this.deleteItem}
        setUpdate= {this.setUpdate}></ListItems>
        
      </div>
    )
  }
}

export default App;
