import utils from '../utils.js'

const RATIO = 1

const voltage = {
  metric: {
    baseUnit: 'V',
    transform: (val) => { return val * RATIO },
    V: {
      name: {
        singular: 'Volt',
        plural: 'Volts'
      },
      to_anchor: 1
    },
    mV: {
      name: {
        singular: 'Millivolt',
        plural: 'Millivolts'
      },
      to_anchor: 0.001
    },
    kV: {
      name: {
        singular: 'Kilovolt',
        plural: 'Kilovolts'
      },
      to_anchor: 1000
    },
    '.1 volts': {
      name: {
        singular: '.1 volt',
        plural: '.1 volts'
      },
      to_anchor: 0.1
    },
    '1 millivolt': {
      name: {
        singular: '1 millivolt',
        plural: '1 millivolts'
      },
      to_anchor: 0.001
    }
  }
}

export default utils(voltage)
