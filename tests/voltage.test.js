import { voltage } from '../src/index.js'

test('V to V', () => {
  expect(voltage(1).from('V').to('V').value).toEqual(1)
})

test('mV to mV', () => {
  expect(voltage(1).from('mV').to('mV').value).toEqual(1)
})

test('kV to kV', () => {
  expect(voltage(1).from('kV').to('kV').value).toEqual(1)
})

test('V to mV', () => {
  expect(voltage(1).from('V').to('mV').value).toEqual(1000)
})

test('V to kV', () => {
  expect(voltage(1).from('V').to('kV').value).toEqual(0.001)
})

test('kV to mV', () => {
  expect(voltage(1).from('kV').to('mV').value).toEqual(1000000)
})

test('mV to kV', () => {
  expect(voltage(1).from('mV').to('kV').value).toEqual(0.000001)
})

test('mV to V', () => {
  expect(voltage(1).from('mV').to('V').value).toEqual(0.001)
})

test('kV to V', () => {
  expect(voltage(1).from('kV').to('V').value).toEqual(1000)
})

test('V to pharosV', () => {
  expect(voltage(1).from('V').to('pharosV').value).toEqual(10)
})

test('pharosV to V', () => {
  expect(voltage(10).from('pharosV').to('V').value).toEqual(1)
})

test('V to pharosMV', () => {
  expect(voltage(1).from('V').to('pharosMV').value).toEqual(1000)
})

test('pharosMV to V', () => {
  expect(voltage(1000).from('pharosMV').to('V').value).toEqual(1)
})
