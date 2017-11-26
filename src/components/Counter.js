import React, {Component} from 'react'

class Counter extends Component {

  count = 0

  handleInc = () => {}

  handleDec = () => {}

  render(){
    return (
      <div>
        Counter: {this.count}
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    )
  }

}

export default Counter
