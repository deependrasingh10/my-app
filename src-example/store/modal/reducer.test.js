// https://github.com/diegohaz/arc/wiki/Reducers#unit-testing-reducers
import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

const altState = {
  ...initialState,
  modal1: true,
  modal2: true,
}

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('handles MODAL_SHOW', () => {
  const action = {
    type: actions.MODAL_SHOW,
    name: 'test',
  }
  const state = {
    ...initialState,
    test: true,
  }
  expect(reducer(initialState, action)).toEqual(state)
  expect(reducer(altState, action)).toEqual({ ...altState, ...state })
})

it('handles MODAL_HIDE', () => {
  const action = { type: actions.MODAL_HIDE }
  expect(reducer(initialState, action)).toEqual(initialState)
  expect(reducer(altState, action)).toEqual(initialState)
  expect(reducer(altState, { ...action, name: 'modal1' })).toEqual({ ...altState, modal1: false })
})