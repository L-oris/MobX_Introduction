import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import {observable, asMap, computed, action} from 'mobx'
import {observer} from 'mobx-react'


class Temperature {

  id = Math.random()
  @observable unit = 'C'
  @observable temperatureCelsius = 25

  @computed get temperatureFahrenheit(){
    return this.temperatureCelsius * (9/5) + 32
  }

  @computed get temperatureKelvin(){
    return this.temperatureCelsius + 273.15
  }

  @computed get temperature(){
    switch(this.unit){
      case "C": return this.temperatureCelsius
      case "F": return this.temperatureFahrenheit
      case "K": return this.temperatureKelvin
    }
  }

  @action setUnit(newUnit){
    this.unit = newUnit
  }

}

const temps = observable(asMap({
  "Amsterdam": new Temperature(),
  "Rome": new Temperature()
}))


const Temper = observer(({temperatures}) => (

  <div>
    {temperatures.entries().map(([city,t]) =>
      <div key={t.id}>
        {city}: {t.temperature}
      </div>
    )}
  </div>

))


//attach 'temps' to  window to manually change & debug
window.temps = temps

ReactDOM.render(
  <Temper temperatures={temps} />,
  document.getElementById('root'))

registerServiceWorker()
