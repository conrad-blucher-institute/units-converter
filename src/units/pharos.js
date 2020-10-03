import utils from '../utils.js'

const RATIO = 1

const pharos = {
  metric: {
    baseUnit: 'Original',
    transform: (val) => { return val * RATIO },
    Original: {
      name: {
        singular: 'Original Value',
        plural: 'Original Values'
      },
      to_anchor: 1
    },
    psu: {
      name: {
        singular: '.00001 psu',
        plural: '.00001 psu'
      },
      to_anchor: 0.00001
    },
    MV: {
      name: {
        singular: '1 millivolt',
        plural: '1 millivolts'
      },
      to_anchor: 0.001
    },
    cal: {
      name: {
        singular: '.001 cal/cm^2',
        plural: '.001 cal/cm^2'
      },
      to_anchor: 0.001
    },
    calM: {
      name: {
        singular: '.001 cal/cm^2/min',
        plural: '.001 cal/cm^2/min'
      },
      to_anchor: 0.001
    },
    mcg: {
      name: {
        singular: '.01 mcg/L',
        plural: '.01 mcg/L'
      },
      to_anchor: 0.01
    },
    percent: {
      name: {
        singular: '.1 %',
        plural: '.1 %'
      },
      to_anchor: 0.1
    },
    degC: {
      name: {
        singular: '.1 degC',
        plural: '.1 degC'
      },
      to_anchor: 0.1
    },
    ms: {
      name: {
        singular: '.1 m/s',
        plural: '.1 m/s'
      },
      to_anchor: 0.1
    },
    mb: {
      name: {
        singular: '.1 millibar',
        plural: '.1 millibars'
      },
      to_anchor: 0.1
    },
    mm: {
      name: {
        singular: '.1 mm',
        plural: '.1 mm'
      },
      to_anchor: 0.1
    },
    ntu: {
      name: {
        singular: '.1 ntu',
        plural: '.1 ntu'
      },
      to_anchor: 0.1
    },
    sec: {
      name: {
        singular: '.1 sec',
        plural: '.1 sec'
      },
      to_anchor: 0.1
    },
    v: {
      name: {
        singular: '.1 volt',
        plural: '.1 volts'
      },
      to_anchor: 0.1
    },
    dB: {
      name: {
        singular: '.43 dB',
        plural: '.43 dB'
      },
      to_anchor: 0.43
    },
    cells: {
      name: {
        singular: '10 cells/mL',
        plural: '10 cells/mL'
      },
      to_anchor: 10
    },
    cfs: {
      name: {
        singular: '10 cfs',
        plural: '10 cfs'
      },
      to_anchor: 10
    },
    microhos: {
      name: {
        singular: '10 micromhos/cm',
        plural: '10 micromhos/cm'
      },
      to_anchor: 10
    },
    microSiemen: {
      name: {
        singular: '10 microSiemen/cm',
        plural: '10 microSiemen/cm'
      },
      to_anchor: 10
    },
    degfromN: {
      name: {
        singular: 'degfromN',
        plural: 'degfromN'
      },
      to_anchor: 1
    },
    degrees: {
      name: {
        singular: 'degrees',
        plural: 'degrees'
      },
      to_anchor: 1
    }
  }
}

export default utils(pharos)
