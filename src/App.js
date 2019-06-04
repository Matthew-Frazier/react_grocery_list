import React from 'react';
import List from './List'
import ListForm from './ListForm'

class App extends React.Component {
  state= {
    list: [
      {id: 1, name: "Pho", picked: true},
      {id: 2, name: "Soy Sauce", picked: false},
      {id: 3, name: "Cheese", picked: false},
    ]
  };

  getUniqueId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const { list } = this.state;
    const list_item = { name, id: this.getUniqueId(), picked: false }
    this.setState({ list: [list_item, ...list]})
  }

  // this function creates a new array that will return our list items with their ids and names in <li></li> tags
  // renderList = () => {
  //   const { list } = this.state;
  //   return list.map( list =>
  //     <li key={list.id}>{list.name}</li>
  //     )
  // };

  listClick = (id) => {
    const { list } = this.state;
    this.setState({
      list: list.map( list_item => {
        if (list_item.id === id) {
          return {
            ...list_item,
            picked: !list_item.picked
          }
        }
        return list_item;
      })
    })
  }

  render() {
    const {list} = this.state;
    // const list = this.state.list;
    return (
      // <div>
      //   <h1>Grocery List</h1>
      //   <ul>
      //     { this.renderList() }
      //   </ul>
      // </div>
      <div>
        <ListForm addItem={this.addItem}/>
        <List name="Grocery List" items={list} listClick={this.listClick}/>
      </div>
    )
  }
}

export default App;
