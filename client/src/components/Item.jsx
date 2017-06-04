import React from 'react'

const Item = (props) => {


  return (
   <tr>
        <td>{props.itemId}</td>
        <td>{props.prices[0]}</td>
        <td>{props.prices[1]}</td>
        <td>{props.prices[2]}</td>
        <td>{props.prices[3]}</td>
        <td>{props.prices[4]}</td>
        <td>{props.prices[5]}</td>
        <td>{props.prices[6]}</td>
        <td>{props.prices[7]}</td>
  </tr>
    
  )

}

export default Item



