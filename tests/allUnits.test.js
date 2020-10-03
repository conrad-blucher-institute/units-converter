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

test('find possibilites with nothin', () => {
  function findPossibilities () {
    allUnits.findPossibilities('nothin')
  }
  expect(findPossibilities).toThrowError(/Cannot find unit/)
})

test('find possibilites with in', () => {
  expect(allUnits.findPossibilities('in')).toBeDefined()
})

test('get length library and do conversion', () => {
  const unit = allUnits.getLibrary('in', 'ft')
  expect(unit(12).from('in').to('ft').value).toEqual(1)
})

test('can\'t find library', () => {
  function getLibrary () {
    allUnits.getLibrary('nothinlol')
  }
  expect(getLibrary).toThrowError(/Cannot find unit/)
})

test('not enough parameters getLibrary', () => {
  function getLibrary () {
    allUnits.getLibrary()
  }
  expect(getLibrary).toThrowError(/One arguement must/)
})

test('get library .1 degC', () => {
  expect(allUnits.getLibrary('.1 degC')).toBeDefined()
})
