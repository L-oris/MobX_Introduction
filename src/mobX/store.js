import {observable} from 'mobx'

const appState = observable({
  count: 0
})
appState.increment = function(){
  this.count ++
}
appState.decrement = function(){
  this.count --
}

export default appState
