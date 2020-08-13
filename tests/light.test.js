import { light } from '../src/index.js'

test('ntu to pharosNtu', () => {
  expect(light(1).from('ntu').to('pharosNtu').value).toEqual(10)
})

test('pharosNtu to ntu', () => {
  expect(light(10).from('pharosNtu').to('ntu').value).toEqual(1)
})
