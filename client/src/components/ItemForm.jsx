import React from 'react'

class ItemForm extends React.Component {

  constructor(props){
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {itemId: ""}
  }

////////////////////////////////////////////////


  handleTextChange(event){
    this.setState({itemId: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

    const typedID = this.state.itemId.trim()
    if (!typedID) return
    this.props.handleSubmit({itemId: typedID})
    this.setState({itemId: ""})   //resets state

  }

////////////////////////////////////////////////

  render () {

    return(
    <form onSubmit={this.handleSubmit}>
      
      <input 
        type="text" 
        placeholder="Item ID" 
        value={this.state.itemId} 
        onChange={this.handleTextChange}/>
      <button type="submit">Add Item</button>
    </form>
    )
  }

}

export default ItemForm