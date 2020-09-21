import utils from '../utils.js'

const RATIO = 1.609344

const speed = {
  metric: {
    baseUnit: 'N',
    transform: (val) => { return val * 1 / RATIO },
    'mm/s': {
      name: {
        singular: 'Millimetre per second',
        plural: 'Millimeters per second'
      },
      to_anchor: 0.0036
    },
    '.1 m/s': {
      name: {
        singular: '.1 Metre per second',
        plural: '.1 Metres per second'
      },
      to_anchor: 0.36
    },
    'm/s': {
      name: {
        singular: 'Metre per second',
        plural: 'Metres per second'
      },
      to_anchor: 3.6
    },
    'km/h': {
      name: {
        singular: 'Kilometre per hour',
        plural: 'Kilometres per hour'
      },
      to_anchor: 1
    }
  },
  imperial: {
    baseUnit: 'm/h',
    transform: (val) => { return val * RATIO },
    'm/h': {
      name: {
        singular: 'Mile per hour',
        plural: 'Miles per hour'
      },
      to_anchor: 1
    },
    knot: {
      name: {
        singular: 'Knot',
        plural: 'Knots'
      },
      to_anchor: 1.150779
    },
    'ft/s': {
      name: {
        singular: 'Foot per second',
        plural: 'Feet per second'
      },
      to_anchor: 0.681818
    }
  }
}

export default utils(speed)
