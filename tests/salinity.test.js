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

test('pharosMicroSiemens to dS', () => {
  expect(salinity(10000).from('pharosMicroSiemens').to('dS').value).toEqual(1)
})

test('pharosMicroSiemens to uS', () => {
  expect(salinity(10000).from('pharosMicroSiemens').to('uS').value).toEqual(1000)
})
