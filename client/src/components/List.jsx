import React from 'react'
import { convertToGold } from '../helper/convert_to_gold'
import { bubbleSort } from '../helper/sorter'

class List extends React.Component {

  constructor(props){
    super(props)
  
    
  }



  myfunction(item_id){

    if (this.props.auctions[0] !== undefined){
      console.log("yeaj")
        var priceArray =[]
      this.props.auctions.forEach((element,index) => {

        if (element.item == item_id) {
          priceArray.push(element.buyout)
        }
      
      })

    bubbleSort(priceArray)
    
    }
  }



  

  render (){






    return(
      <div >
      <form>
              <label>
                Name:
                <input type="text"/>
              </label>
              <input type="submit" value="Submit" />
            </form>
      {this.myfunction(141577)}
      <table id="attach-here">
        <tbody>
        <tr>
          <th>itemid</th>
          <th>name</th>
          <th>lowest price1</th>
          <th>lowest price2</th>
          <th>lowest price3</th>
          <th>lowest price4</th>
          <th>lowest price5</th>
          <th>lowest price6</th>
          <th>lowest price7</th>
        </tr>
        <tr>
          <td>124437</td>
          <td>CLOTH</td>
          <td>{convertToGold(this.props.prices[0])}</td>
          <td>{this.props.prices[1]}</td>
          <td>{this.props.prices[2]}</td>
          <td>{this.props.prices[3]}</td>
          <td>{this.props.prices[4]}</td>
          <td>{this.props.prices[5]}</td>
          <td>{this.props.prices[6]}</td>
          
        </tr>
        </tbody>
      </table>
      </div>
      )
  }

}

export default List