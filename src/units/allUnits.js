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
      throw new Error(`Cannot find unit object that has to: ${to} and from: ${from}`)
    }

    return unitObj(value).from(from).to(to, precision)
  },

  /**
   * Gets the possibilities from unit library
   *
   * @param {string} [from=null] in, ft, mm, kg, etc
  */
  findPossibilities: (from) => {
    const unitObj = allUnits.units.find((unit) => {
      return unit().getUnit(from)
    })

    if (!unitObj) {
      throw new Error(`Cannot find unit object with from: ${from}`)
    }

    return unitObj().from(from).possibilities()
  },

  /**
   * Gets a unit library based on from and/or to
   *
   * @param {string} [from=null] in, ft, mm, kg, etc
   * @param {string} [to=null] in, ft, mm, kg, etc
  */
  getLibrary: (from = null, to = null) => {
    if (!from && !to) {
      throw new Error(`One arguement must be defined, from: ${from}, to: ${to}`)
    }

    const unitLibrary = allUnits.units.find((unit) => {
      let conditions = []
      if (unit().getUnit(from)) {
        conditions.push(true)
      }

      if (unit().getUnit(to)) {
        conditions.push(true)
      }

      return conditions.length > 0
    })

    if (!unitLibrary) {
      throw new Error(`Cannot find unit object that has to: ${to} and from: ${from}`)
    }

    return unitLibrary
  }
}

export default allUnits
