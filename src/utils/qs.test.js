import qs from './qs.js'
import { assert, describe, isDeeplyEqual } from './tester.js'

describe('Testing qs.parse()', () => {
  assert(
    'It should return empty object for empty string.',
    isDeeplyEqual(qs.parse(''), {})
  )
  assert(
    'It should return empty object for undefined.',
    isDeeplyEqual(qs.parse(), {})
  )
  assert(
    'It should return { asd: "1", fgh: "2" } for ?asd=1&fgh=2 input.',
    isDeeplyEqual(qs.parse('?asd=1&fgh=2'), { asd: '1', fgh: '2' })
  )
  assert(
    'It should return { asd: ["1", "2"] } for ?asd[]=1&asd[]=2 input.',
    isDeeplyEqual(qs.parse('?asd[]=1&asd[]=2'), { asd: ['1', '2'] })
  )
})

describe('Testing qs.stringify()', () => {
  assert(
    'It should return empty string for empty object.',
    qs.stringify({}) === ''
  )
  assert('It should return empty string for undefined.', qs.stringify() === '')
  assert(
    'It should return ?asd=1&fgh=2 for { asd: "1", fgh: "2" } input.',
    isDeeplyEqual(qs.stringify({ asd: '1', fgh: '2' }), '?asd=1&fgh=2')
  )
  assert(
    'It should return ?asd[]=1&asd[]=2 for { asd: ["1", "2"] } input.',
    isDeeplyEqual(qs.stringify({ asd: ['1', '2'] }), '?asd[]=1&asd[]=2')
  )
})
