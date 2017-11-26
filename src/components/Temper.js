import React, {Component} from 'react'
import {observable, computed} from 'mobx'
import {observer} from 'mobx-react'

const t = new class Temperature {

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

}()

//attach 't' to browser window to manually change & debug it
window.t = t

@observer class Temper extends Component {

  render(){
    return (
      <div>
        {t.temperature}
      </div>
    )
  }

}

export default Temper
