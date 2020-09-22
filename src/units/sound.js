import utils from '../utils.js'

const RATIO = 1

const sound = {
  metric: {
    baseUnit: 'db',
    transform: (val) => { return val * RATIO },
    dB: {
      name: {
        singular: 'Decibel',
        plural: 'Decibels'
      },
      to_anchor: 1
    },
    B: {
      name: {
        singular: 'Bel',
        plural: 'Bels'
      },
      to_anchor: 10
    },
    '.43 decibel': {
      name: {
        singular: '.43 decibel',
        plural: '.43 decibels'
      },
      to_anchor: 0.43
    }
  }
}

export default utils(sound)
