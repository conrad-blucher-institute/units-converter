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
        singular: 'microSiemen/cm',
        plural: 'microSiemens/cm',
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
        abbreviation: 'ppm'
      },
      to_anchor: 1 / 640
    },
    ppt: {
      name: {
        singular: 'parts per thousand',
        plural: 'parts per thousand',
        abbreviation: 'ppt'
      },
      to_anchor: 1000 / 640
    },
    // psu and ppt are about the same
    psu: {
      name: {
        singular: 'practical salinity unit',
        plural: 'practical salinity units',
        abbreviation: 'psu'
      },
      to_anchor: 1000 / 640
    },
    '.1 psu': {
      name: {
        singular: '.1 practical salinity unit',
        plural: '.1 practical salinity units',
        abbreviation: '.1 psu'
      },
      to_anchor: (1000 / 640) / 10
    },
    '10 microSiemen/cm': {
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
