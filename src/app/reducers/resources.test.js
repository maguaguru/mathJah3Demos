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

        it('should update state with change resource type', () => {
            expect(reducer(state, Actions.changeResourceType('newType'))).
                toHaveProperty('resourceType', 'newType')
        })

        it('should update state with change resource url', () => {
            expect(reducer(state, Actions.setResourceUrl('http://localhost:80808/resources'))).
                toHaveProperty('resourceUrl', 'http://localhost:80808/resources')
        })
    })
})