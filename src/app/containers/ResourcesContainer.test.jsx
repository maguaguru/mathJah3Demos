/* globals jest, expect, beforeEach, describe, it */

import React from 'react'
import { mount } from 'enzyme'
import { ResourcesContainer } from '.'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter, Route } from 'react-router'
import { resourcesActions } from '../reducers'
import { Resources } from '../components'

describe('Resources Container', () => {
    let wrapper, resourcesContainer, mockStore, mockState

    it('should be defined', () => {
        expect(ResourcesContainer).toBeDefined()
    })

    describe('Render', () => {
        beforeEach(() => {
            mockState = {
                resources: {
                    resourceId: 'testResId',
                    resourceRequestStatus: 'ok',
                    resourceType: 'Video',
                    resourceUrl: 'http://localhost:80808/resources'
                }
            }
            mockStore = configureStore([])(mockState)
            mockStore.dispatch = jest.fn()
            wrapper = mount(
                <MemoryRouter>
                    <Provider store={mockStore}>
                        <ResourcesContainer {...mockState} />
                    </Provider>
                </MemoryRouter>
            )
            resourcesContainer = wrapper.find(ResourcesContainer)
        })

        it('should render Resources Component', () => {
            expect(resourcesContainer.find(Resources).exists()).toBeTruthy()
        })

        it('should dispatch getResourceById action on Resource getResourceById call ', () => {
            resourcesContainer.find(Resources).prop('getResourceById')('resourceTestId')

            expect(mockStore.dispatch).toHaveBeenCalled()
            expect(mockStore.dispatch).toHaveBeenCalledWith(resourcesActions.getResourceById('resourceTestId'))
        })
    })
})