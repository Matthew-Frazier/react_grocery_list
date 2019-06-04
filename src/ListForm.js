import React from 'react'

class ListForm extends React.Component {
  state = { name: "" }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.name)
    this.props.addItem(this.state.name);
    this.setState({ name: "" })
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={name}
        name="list item"
        onChange={this.handleChange}
        required 
        placeholder="Add an item"/>
      </form>
    )
  }
}

export default ListForm;