import utils from '../utils.js'

const RATIO = 1

const light = {
  metric: {
    baseUnit: 'ntu',
    transform: (val) => { return val * RATIO },
    ntu: {
      name: {
        singular: 'Nephelometric Turbidity Ratio Unit (NTRU)',
        plural: 'Nephelometric Turbidity Ratio Unit (NTRU)'
      },
      to_anchor: 1
    },
    pharosNtu: {
      name: {
        singular: '.1 ntu',
        plural: '.1 ntu'
      },
      to_anchor: 1 / 10
    }
  }
}

export default utils(light)
