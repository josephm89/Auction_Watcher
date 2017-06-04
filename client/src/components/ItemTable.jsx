import React from 'react';
import Item from './Item.jsx';

class ItemTable extends React.Component{

  render(){
    const items = this.props.trackedAuctions.map((element) => {
      return (
        <Item itemId={element.itemId} key={element.itemId} prices={element.prices}>
        </Item>
      )
    })

    return (
      <table>
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
              
                {items}
              
              </tbody>
            </table>
    )
  }
}

export default ItemTable