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

test('dB to pharosDb', () => {
  expect(sound(0.43).from('dB').to('pharosDb').value).toEqual(1)
})

test('pharosDb to dB', () => {
  expect(sound(1).from('pharosDb').to('dB').value).toEqual(0.43)
})
