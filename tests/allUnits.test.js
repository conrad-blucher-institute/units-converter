import { allUnits } from '../src/index.js'

test('in to ft', () => {
  expect(allUnits.convert(12, 'in', 'ft').value).toEqual(1)
})

test('kg to g', () => {
  expect(allUnits.convert(1, 'kg', 'g').value).toEqual(1000)
})

// This one should fail
test('random to ra', () => {
  function convert () {
    allUnits.convert(1, 'ra', 'random')
  }
  expect(convert).toThrowError(/Cannot find unit/)
})
