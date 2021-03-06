import utils from '../utils.js'

const RATIO = 0.00014503768078

const pressure = {
  metric: {
    baseUnit: 'kPa',
    transform: (val) => { return val * RATIO },
    Pa: {
      name: {
        singular: 'pascal',
        plural: 'pascals'
      },
      to_anchor: 1 / 1000
    },
    kPa: {
      name: {
        singular: 'kilopascal',
        plural: 'kilopascals'
      },
      to_anchor: 1
    },
    MPa: {
      name: {
        singular: 'megapascal',
        plural: 'megapascals'
      },
      to_anchor: 1000
    },
    hPa: {
      name: {
        singular: 'hectopascal',
        plural: 'hectopascals'
      },
      to_anchor: 1 / 10
    },
    mbar: {
      name: {
        singular: 'millibar',
        plural: 'millibars'
      },
      to_anchor: 1 / 10
    },
    bar: {
      name: {
        singular: 'bar',
        plural: 'bar'
      },
      to_anchor: 100
    },
    mmHg: {
      name: {
        singular: 'mm Hg',
        plural: 'mm Hg'
      },
      to_anchor: 0.13332239
    },
    torr: {
      name: {
        singular: 'torr',
        plural: 'torr'
      },
      to_anchor: 101325 / 760000
    },
    inHg: {
      name: {
        singular: 'inch Hg',
        plural: 'inches Hg'
      },
      to_anchor: 3.38639
    }
  },

  imperial: {
    baseUnit: 'psi',
    transform: (val) => { return val * 1 / RATIO },
    psi: {
      name: {
        singular: 'pound per square inch',
        plural: 'pounds per square inch'
      },
      to_anchor: 1 / 1000
    },
    ksi: {
      name: {
        singular: 'kilopound per square inch',
        plural: 'kilopound per square inch'
      },
      to_anchor: 1
    }
  }
}

export default utils(pressure)
