import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import {observable, asMap, computed, action, useStrict} from 'mobx'
import {observer} from 'mobx-react'

//avoid state modifications without using @actions
useStrict(true)

const t = new class Temperature {

  id = Math.random()
  @observable unit = 'C'
  @observable temperatureCelsius = 25

  @computed get temperatureFahrenheit(){
    console.log('Calculating Fahrenheit')
    return this.temperatureCelsius * (9/5) + 32
  }

  @computed get temperatureKelvin(){
    console.log('Calculating Kelvin')
    return this.temperatureCelsius + 273.15
  }

  @computed get temperature(){
    console.log('Calculating temperature')
    switch(this.unit){
      case "C": return this.temperatureCelsius
      case "F": return this.temperatureFahrenheit
      case "K": return this.temperatureKelvin
    }
  }

  @action setUnit(newUnit){
    this.unit = newUnit
  }

  @action setCelsius(degrees){
    this.temperatureCelsius = degrees
  }

  @action('update temperature and unit') setTemperatureAndUnit(degrees,unit){
    this.setCelsius(degrees)
    this.setUnit(unit)
  }

}()


const Temper = observer(({temperature}) => (
  <div>
    {temperature.temperature}
  </div>
))


ReactDOM.render(
  <Temper temperature={t} />,
  document.getElementById('root'))


//attach 'temps' to  window to manually change & debug
window.t = t

registerServiceWorker()
