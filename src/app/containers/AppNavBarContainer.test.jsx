/* globals jest, expect, beforeEach, describe, it */

import React from 'react'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { push } from 'connected-react-router'
import { MemoryRouter, Route } from 'react-router-dom'
import { AppNavBar } from '../components'
import { AppNavBarContainer } from '.'

describe('App NavBar Container', () => {
    let wrapper, appNavBarContainer, mockStore, mockState

    it('should be defined', () => {
        expect(AppNavBarContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            mockState = {
                configuration: {
                    launchId: ''
                }
            }
            mockStore = configureStore([])(mockState)
            mockStore.dispatch = jest.fn()
            wrapper = mount(
                <Provider store={mockStore}>
                    <MemoryRouter initialEntries={['/main']}>
                        <Route path="/main/:tab?" component={AppNavBarContainer} />
                    </MemoryRouter>
                </Provider>
            )
            appNavBarContainer = wrapper.find(AppNavBarContainer)
        })

        it('should render AppNavBar Component', () => {
            expect(appNavBarContainer.find(AppNavBar).exists()).toBeTruthy()
        })

        it('should dispatch push action on AppNavBar changeTab call', () => {
            appNavBarContainer.find(AppNavBar).prop('changeTab')('skip', 'tab')

            expect(mockStore.dispatch).toHaveBeenCalled()
            expect(mockStore.dispatch).toHaveBeenCalledWith(push('/main/tab'))
        })
    })
})