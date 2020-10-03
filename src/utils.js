'use strict'

const Converter = function (numerator, definitions) {
  this.definitions = definitions
  this.val = numerator
}

Converter.prototype.from = function (from) {
  if (this.destination) { throw new Error('.from must be called before .to') }

  this.origin = this.getUnit(from)

  if (!this.origin) {
    this.throwUnsupportedUnitError(from)
  }

  return this
}

Converter.prototype.to = function (to, precision = null) {
  if (!this.origin) { throw new Error('.to must be called after .from') }

  this.destination = this.getUnit(to)

  let result

  if (!this.destination) {
    this.throwUnsupportedUnitError(to)
  }

  if (this.origin.abbr === this.destination.abbr) {
    return Object.assign({ value: this.val }, this.describe(this.destination.abbr))
  }

  result = this.val * this.origin.unit.to_anchor

  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift
  }

  if (this.origin.system !== this.destination.system) {
    result = this.definitions[this.origin.system].transform(result)
  }

  if (this.destination.unit.anchor_shift !== undefined) {
    result += this.destination.unit.anchor_shift
  }

  result = result / this.destination.unit.to_anchor

  if (precision) {
    result = +result.toFixed(precision) // Rounding number to percise value
  }

  return Object.assign({ value: result }, this.describe(this.destination.abbr))
}

Converter.prototype.toBestAllSystems = function (options) {
  if (!this.origin) { throw new Error('.toBestAllSystems must be called after .from') }

  options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
    percision: null,
    system: null
  }, options)

  const systems = this.getSystems()
  const resultObj = {}
  systems.forEach(system => {
    options.system = system
    resultObj[system] = this.toBest(options)
  })

  return resultObj
}

Converter.prototype.toBest = function (options) {
  if (!this.origin) { throw new Error('.toBest must be called after .from') }

  options = Object.assign({
    exclude: [],
    cutOffNumber: 1,
    percision: null,
    system: null
  }, options)

  const list = this.list()
    .filter(item => {
      if (!options.system) {
        return !options.exclude.includes(item.unit) && this.describe(item.unit).system === this.origin.system
      }
      return !options.exclude.includes(item.unit) && options.system === this.describe(item.unit).system
    })
    .reduce((acc, item) => {
      const result = this.to(item.unit)
      if (!acc || (result.value >= options.cutOffNumber && result.value < acc.value)) {
        return result
      } else {
        return acc
      }
    }, undefined)

  if (options.precision) {
    list.value = +list.value.toFixed(options.precision) // Rounding number to percise value
  }

  return list
}

Converter.prototype.getUnit = function (abbr) {
  const systemNames = Object.keys(this.definitions)
  const found = systemNames.map(systemName => {
    if (this.definitions[systemName][abbr]) {
      return {
        abbr: abbr,
        system: systemName,
        unit: this.definitions[systemName][abbr]
      }
    }
  }).filter(item => item !== undefined)

  return Array.isArray(found) ? found[0] : undefined
}

Converter.prototype.list = function () {
  return this.possibilities().map(abbr => this.describe(abbr))
}

Converter.prototype.throwUnsupportedUnitError = function (what) {
  throw new Error('Unsupported unit ' + what)
}

Converter.prototype.describe = function (abbr) {
  if (!abbr) { throw new Error('You must select a unit') }

  const unit = this.getUnit(abbr)

  return {
    unit: unit.abbr,
    system: unit.system,
    singular: unit.unit.name.singular,
    plural: unit.unit.name.plural
  }
}

Converter.prototype.possibilities = function () {
  return Array.prototype.concat(...Object.keys(this.definitions)
    .map(systemName => {
      return Object.keys(this.definitions[systemName]).splice(2)
    }))
}

Converter.prototype.getSystems = function () {
  return Object.keys(this.definitions)
}

export default function converter (definitions) {
  return (val) => {
    return new Converter(val, definitions)
  }
}
