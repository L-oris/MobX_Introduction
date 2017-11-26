import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import {observable, computed} from 'mobx'
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

}

const temps = observable([])

//add new temperatures to observable array
temps.push(new Temperature())
temps.push(new Temperature())


//attach 'temps' to browser window to manually change & debug it
window.temps = temps


const Temper = observer(({temperatures}) => (

  <div>
    {temperatures.map(t =>
      <div key={t.id}>
        {t.temperature}
      </div>
    )}
  </div>

))


ReactDOM.render(
  <Temper temperatures={temps} />,
  document.getElementById('root'))

registerServiceWorker()
