import React from 'react'
import {convertToGold} from '../helper/convert_to_gold'

class Main extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      data: [],
      auctions: [],
      item: "",
      line1: "",
      clothprice: []
    }
  }

  bubbleSort(array, count = 0){
    let swapped = false;
    for (let i = 0; i < array.length - count; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i +1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    swapped ? this.bubbleSort(array, count++) : null;
  }


  showCloth(){
      var priceArray =[]
    this.state.auctions.forEach((element,index) => {

      if (element.item == 124437) {
        priceArray.push(element.buyout)
      }
    
    })
    this.bubbleSort(priceArray)
    this.setState({clothprice: priceArray})
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
        
        this.showCloth()
       } else{
        console.log("ajj")
       }
    }
    request.send(null)
  }

  handleClickRequest(){
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

  handleInputChange(e){
    console.log(e.target.value)
    this.setState({item: e.target.value})
  }


  render(){
    return(
      <div className="listing">
       
        <div className='shows-container'>
          <button onClick={this.handleClickRequest.bind(this)}>GET DATA</button>
         
          <table>
            <tbody>
            <tr>
              <th>itemid</th>
              <th>name</th>
              <th>bloodcost</th>
              <th>lowest price1</th>
              <th>lowest price2</th>
              <th>lowest price3</th>
              <th>lowest price4</th>
              <th>lowest price5</th>
              <th>lowest price6</th>
            </tr>
            <tr>
              <td>124437</td>
              <td>CLOTH</td>
              <td>{convertToGold(this.state.clothprice[0])}</td>
              <td>{this.state.clothprice[1]}</td>
              <td>{this.state.clothprice[2]}</td>
              <td>{this.state.clothprice[3]}</td>
              <td>{this.state.clothprice[4]}</td>
              <td>{this.state.clothprice[5]}</td>
              <td>{this.state.clothprice[6]}</td>
              
            </tr>
            </tbody>
          </table>
        </div>
      
      </div>
    )
  }

}

export default Main