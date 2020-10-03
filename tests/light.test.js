import { light } from '../src/index.js'

test('ntu to .1 ntu', () => {
  expect(light(1).from('ntu').to('.1 ntu').value).toEqual(10)
})

test('.1 ntu to ntu', () => {
  expect(light(10).from('.1 ntu').to('ntu').value).toEqual(1)
})
