import React, {Component} from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer class Counter extends Component {

  @observable count = 0

  handleInc = () => {
    this.count ++
  }

  handleDec = () => {
    this.count --
  }

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
