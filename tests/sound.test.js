import { sound } from '../src/index.js'

test('db to db', () => {
  expect(sound(1).from('db').to('db').value).toEqual(1)
})

test('db to pharosDb', () => {
  expect(sound(0.43).from('db').to('pharosDb').value).toEqual(1)
})

test('pharosDb to db', () => {
  expect(sound(1).from('pharosDb').to('db').value).toEqual(0.43)
})
