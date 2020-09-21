import acceleration from './acceleration.js'
import angle from './angle.js'
import apparentPower from './apparentPower.js'
import area from './area.js'
import charge from './charge.js'
import current from './current.js'
import digital from './digital.js'
import each from './each.js'
import energy from './energy.js'
import force from './force.js'
import frequency from './frequency.js'
import illuminance from './illuminance.js'
import length from './length.js'
import light from './light.js'
import mass from './mass.js'
import pace from './pace.js'
import partsPer from './partsPer.js'
import power from './power.js'
import pressure from './pressure.js'
import reactiveEnergy from './reactiveEnergy.js'
import reactivePower from './reactivePower.js'
import salinity from './salinity.js'
import speed from './speed.js'
import sound from './sound.js'
import temperature from './temperature.js'
import time from './time.js'
import voltage from './voltage.js'
import volume from './volume.js'
import volumeFlowRate from './volumeFlowRate.js'

const allUnits = {
  units: [acceleration, angle, apparentPower, area, charge, current, digital, each,
    energy, force, frequency, illuminance, length, light, mass, pace, partsPer, power,
    pressure, reactiveEnergy, reactivePower, salinity, sound, speed, temperature, time,
    voltage, volume, volumeFlowRate],

  /**
   * Convert: used to convert a value without knowing which library is associated with the value.
   *
   * @param {number} value value to convert
   * @param {string} from in, mm, m, dB, etc (case sensitive)
   * @param {string} to in, mm, m, dB, etc (case sensitive)
   * @param {number} [precision=null] if you want a fixed decimal place, provide this
  */
  convert: (value, from, to, precision = null) => {
    const unitObj = allUnits.units.find((unit) => {
      return unit().getUnit(to) && unit().getUnit(from)
    })

    if (!unitObj) {
      throw new Error(`Cannot find unit object that has ${to} as to and ${from} as from`)
    }

    return unitObj(value).from(from).to(to, precision)
  }
}

export default allUnits
