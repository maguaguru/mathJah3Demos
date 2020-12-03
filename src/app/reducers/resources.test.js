/* global expect, describe, it */

import reducerFunction, * as Actions from './resources'

describe('Resources Redux', () => {
    const reducer = reducerFunction('test')
    let state

    it('should provide a reducer', () => {
        expect(typeof reducer).toEqual('function')
    })

    describe('Action reducers', () => {
        beforeEach(() => {
            state = Actions.defaultState
        })

        it('should update state with change configuration request status', () => {
            expect(reducer(state, Actions.getResourceById('testId'))).
                toHaveProperty('resourceRequestStatus', 'progress')
        })
    })
})