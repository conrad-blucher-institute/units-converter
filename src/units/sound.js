import utils from '../utils.js'

const RATIO = 1

const sound = {
  metric: {
    baseUnit: 'db',
    transform: (val) => { return val * RATIO },
    db: {
      name: {
        singular: 'Decibel',
        plural: 'Decibels'
      },
      to_anchor: 1
    },
    pharosDb: {
      name: {
        singular: '.43 decibel',
        plural: '.43 decibels'
      },
      to_anchor: 0.43
    }
  }
}

export default utils(sound)