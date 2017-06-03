import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'




class App extends React.Component{

  render(){
    return (
      
        <div className='container'>
          <Main/>
        </div>
      
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
