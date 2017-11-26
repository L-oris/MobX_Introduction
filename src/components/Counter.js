import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer class Counter extends Component {

  handleInc = () => {
    this.props.store.increment()
  }

  handleDec = () => {
    this.props.store.decrement()
  }

  render(){
    return (
      <div>
        Counter: {this.props.store.count}
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    )
  }

}

export default Counter
