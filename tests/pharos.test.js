import { pharos } from '../src/index.js'

test('Original to Original', () => {
  expect(pharos(1).from('Original').to('Original').value).toEqual(1)
})

test('Original to psu', () => {
  expect(pharos(0.00001).from('Original').to('psu').value).toEqual(1)
})

test('psu to Original', () => {
  expect(pharos(1).from('psu').to('Original').value).toEqual(0.00001)
})

test('Original to MV', () => {
  expect(pharos(1).from('Original').to('MV').value).toEqual(1000)
})

test('MV to Original', () => {
  expect(pharos(1).from('MV').to('Original').value).toEqual(0.001)
})

test('Original to cal', () => {
  expect(pharos(1).from('Original').to('cal').value).toEqual(1000)
})

test('cal to Original', () => {
  expect(pharos(1).from('cal').to('Original').value).toEqual(0.001)
})

test('Original to calM', () => {
  expect(pharos(1).from('Original').to('calM').value).toEqual(1000)
})

test('calM to Original', () => {
  expect(pharos(1).from('calM').to('Original').value).toEqual(0.001)
})

test('Original to mcg', () => {
  expect(pharos(1).from('Original').to('mcg').value).toEqual(100)
})

test('mcg to Original', () => {
  expect(pharos(1).from('mcg').to('Original').value).toEqual(0.01)
})

test('Original to percent', () => {
  expect(pharos(1).from('Original').to('percent').value).toEqual(10)
})

test('percent to Original', () => {
  expect(pharos(1).from('percent').to('Original').value).toEqual(0.1)
})

test('Original to degC', () => {
  expect(pharos(1).from('Original').to('degC').value).toEqual(10)
})

test('degC to Original', () => {
  expect(pharos(1).from('degC').to('Original').value).toEqual(0.1)
})

test('Original to ms', () => {
  expect(pharos(1).from('Original').to('ms').value).toEqual(10)
})

test('ms to Original', () => {
  expect(pharos(1).from('ms').to('Original').value).toEqual(0.1)
})

test('Original to mb', () => {
  expect(pharos(1).from('Original').to('mb').value).toEqual(10)
})

test('mb to Original', () => {
  expect(pharos(1).from('mb').to('Original').value).toEqual(0.1)
})

test('Original to mm', () => {
  expect(pharos(1).from('Original').to('mm').value).toEqual(10)
})

test('mm to Original', () => {
  expect(pharos(1).from('mm').to('Original').value).toEqual(0.1)
})

test('Original to ntu', () => {
  expect(pharos(1).from('Original').to('ntu').value).toEqual(10)
})

test('ntu to Original', () => {
  expect(pharos(1).from('ntu').to('Original').value).toEqual(0.1)
})

test('Original to sec', () => {
  expect(pharos(1).from('Original').to('sec').value).toEqual(10)
})

test('sec to Original', () => {
  expect(pharos(1).from('sec').to('Original').value).toEqual(0.1)
})

test('Original to v', () => {
  expect(pharos(1).from('Original').to('v').value).toEqual(10)
})

test('v to Original', () => {
  expect(pharos(1).from('v').to('Original').value).toEqual(0.1)
})

test('Original to dB', () => {
  expect(pharos(0.43).from('Original').to('dB').value).toEqual(1)
})

test('dB to Original', () => {
  expect(pharos(1).from('dB').to('Original').value).toEqual(0.43)
})

test('Original to cells', () => {
  expect(pharos(1).from('Original').to('cells').value).toEqual(0.1)
})

test('cells to Original', () => {
  expect(pharos(1).from('cells').to('Original').value).toEqual(10)
})

test('Original to cfs', () => {
  expect(pharos(1).from('Original').to('cfs').value).toEqual(0.1)
})

test('cfs to Original', () => {
  expect(pharos(1).from('cfs').to('Original').value).toEqual(10)
})

test('Original to microhos', () => {
  expect(pharos(1).from('Original').to('microhos').value).toEqual(0.1)
})

test('microhos to Original', () => {
  expect(pharos(1).from('microhos').to('Original').value).toEqual(10)
})

test('Original to microSiemen', () => {
  expect(pharos(1).from('Original').to('microSiemen').value).toEqual(0.1)
})

test('microSiemen to Original', () => {
  expect(pharos(1).from('microSiemen').to('Original').value).toEqual(10)
})

test('Original to degfromN', () => {
  expect(pharos(1).from('Original').to('degfromN').value).toEqual(1)
})

test('degfromN to Original', () => {
  expect(pharos(1).from('degfromN').to('Original').value).toEqual(1)
})

test('Original to degrees', () => {
  expect(pharos(1).from('Original').to('degrees').value).toEqual(1)
})

test('degrees to Original', () => {
  expect(pharos(1).from('degrees').to('Original').value).toEqual(1)
})
