import React from 'react'
import { bubbleSort } from '../helper/sorter'
import ItemTable from './ItemTable'
import ItemForm from './ItemForm'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      data: [],   /// url init
      auctions: [],       /// all auctions
      trackedAuctions: JSON.parse(localStorage.getItem('savedAuctions')) || []
    }
  }


  handleItemSubmit(typedId){

    var priceArray =[]

    this.state.auctions.forEach((element,index) => {

      if (element.item == typedId.itemId) {
        priceArray.push(element.buyout)
      }
    
    })

    bubbleSort(priceArray)
    console.log("l34",typedId)
    const newItem = {itemId: typedId.itemId, prices: priceArray}
    console.log("new item",newItem)
    this.setState((prevState) => {
      localStorage.setItem('savedAuctions',JSON.stringify(prevState.trackedAuctions.concat([newItem])))
      return {
        trackedAuctions: prevState.trackedAuctions.concat([newItem])
      }
    })


  }


///////////////////////////////////////////////////////////////////////////

  getData(){
    var url = 'https://eu.api.battle.net/wow/auction/data/silvermoon?locale=en_GB&apikey=zh3vgmnxacmrae2awkbq9prguqdxhnpk'
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
       if(request.status === 200){
        var data = JSON.parse(request.responseText)
        this.setState( { data: data } )
        this.getJson();
       } else{
        this.props.history.goBack()
       }
    }
    request.send(null)
  }

  getJson(){
    var url = this.state.data.files[0].url
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'json';
    request.onload = () => {
       if(request.status === 200){
        this.setState( { auctions: request.response.auctions } )
        console.log(this.state.auctions)
        window.alert("data is here")
        
       } else{
        console.log("ajj")
       }
    }
    request.send(null)
  }
  
 /////////////////////////////////////////////////////////////////////////////// 

  render(){
    return(
      <div className="listing">
        <button onClick={this.getData.bind(this)}>GET DATA</button>
        <ItemForm handleSubmit={this.handleItemSubmit.bind(this)}/>
        <ItemTable  trackedAuctions={this.state.trackedAuctions}/>
      </div>
    )
  }

}

export default Main


  // showCloth(){
  //     var priceArray =[]
  //   this.state.auctions.forEach((element,index) => {

  //     if (element.item == 141577) {
  //       priceArray.push(element.buyout)
  //     }
    
  //   })
  //   bubbleSort(priceArray)
  //   this.setState({clothprice: priceArray})
  // }

  // createChildren(element, index){
  //    return <div key={index}>{element}</div>
  // }



// <div>
//   
//   {this.state.test.map(this.createChildren)}
// </div>
// <List 
//   prices={this.state.clothprice}
//   auctions={this.state.auctions}
// />