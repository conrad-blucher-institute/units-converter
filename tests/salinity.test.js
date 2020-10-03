import { salinity } from '../src/index.js'

test('dS to mS', () => {
  expect(salinity(1).from('dS').to('mS').value).toEqual(1)
})

test('uS to dS', () => {
  expect(salinity(1000).from('uS').to('dS').value).toEqual(1)
})

test('EC to dS', () => {
  expect(salinity(1000).from('EC').to('dS').value).toEqual(1)
})

test('ppm to dS', () => {
  expect(salinity(640).from('ppm').to('dS').value).toEqual(1)
})

test('ppm to ppt', () => {
  expect(salinity(1000).from('ppm').to('ppt').value).toEqual(1)
})

test('psu to ppt', () => {
  expect(salinity(1000).from('psu').to('ppt').value).toEqual(1000)
})

test('.1 psu to psu', () => {
  expect(salinity(1).from('.1 psu').to('psu').value).toEqual(0.1)
})

test('10 microSiemen/cm to dS', () => {
  expect(salinity(10000).from('10 microSiemen/cm').to('dS').value).toEqual(1)
})

test('10 microSiemen/cm to uS', () => {
  expect(salinity(10000).from('10 microSiemen/cm').to('uS').value).toEqual(1000)
})
