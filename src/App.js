import Devtools from 'mobx-react-devtools'
import React, { Component } from 'react'
import Counter from './components/Counter'
import Temper from './components/Temper'
import appState from './mobX/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Devtools />

        <h1>Welcome to React</h1>

        <Counter store={appState}/>

        <Temper />
      </div>
    )
  }
}

export default App
