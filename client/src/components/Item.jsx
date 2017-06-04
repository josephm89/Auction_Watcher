import React from 'react'
import { convertToGold } from '../helper/convert_to_gold'

const Item = (props) => {


  return (
   <tr>
        <td>{props.itemId}</td>
        <td>{convertToGold(props.prices[0])}</td>
        <td>{convertToGold(props.prices[1])}</td>
        <td>{convertToGold(props.prices[2])}</td>
        <td>{convertToGold(props.prices[3])}</td>
        <td>{convertToGold(props.prices[4])}</td>
        <td>{convertToGold(props.prices[5])}</td>
        <td>{convertToGold(props.prices[6])}</td>
        <td>{convertToGold(props.prices[7])}</td>
        
  </tr>
    
  )

}

export default Item



