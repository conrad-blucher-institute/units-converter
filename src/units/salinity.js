import utils from '../utils.js'
// Measurements: https://www.dpi.nsw.gov.au/agriculture/soils/salinity/general-information/measuring
const RATIO = 1

const salinity = {
  metric: {
    baseUnit: 'dS',
    transform: (val) => { return val * RATIO },
    dS: {
      name: {
        singular: 'deciSiemens per metre',
        plural: 'deciSiemens per metres',
        abbreviation: 'dS/m'
      },
      to_anchor: 1
    },
    mS: {
      name: {
        singular: 'milliSiemens per centimetre',
        plural: 'milliSiemens per centimetres',
        abbreviation: 'mS/cm'
      },
      to_anchor: 1
    },
    uS: {
      name: {
        singular: 'microSiemens per centimetre',
        plural: 'microSiemens per centimetres',
        abbreviation: 'uS/cm'

      },
      to_anchor: 1 / 1000
    },
    EC: {
      name: {
        singular: 'electrical conductivity',
        plural: 'electrical conductivity',
        abbreviation: 'EC'
      },
      to_anchor: 1 / 1000
    },
    ppm: {
      name: {
        singular: 'parts per million',
        plural: 'parts per million',
        abbreviation: 'ppm*'
      },
      to_anchor: 1 / 640
    },
    pharosMicroSiemens: {
      name: {
        singular: '10 microSiemen/cm',
        plural: '10 microSiemen/cm',
        abbreviation: '10 uS/cm'
      },
      to_anchor: 1 / 10000 // microSiemen anchor / 10
    }
  }
}

export default utils(salinity)
