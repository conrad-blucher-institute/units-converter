import { sound } from '../src/index.js'

test('dB to dB', () => {
  expect(sound(1).from('dB').to('dB').value).toEqual(1)
})

test('B to dB', () => {
  expect(sound(1).from('B').to('dB').value).toEqual(10)
})

test('dB to B', () => {
  expect(sound(1).from('dB').to('B').value).toEqual(0.1)
})

test('dB to .43 decibel', () => {
  expect(sound(0.43).from('dB').to('.43 decibel').value).toEqual(1)
})

test('.43 decibel to dB', () => {
  expect(sound(1).from('.43 decibel').to('dB').value).toEqual(0.43)
})
