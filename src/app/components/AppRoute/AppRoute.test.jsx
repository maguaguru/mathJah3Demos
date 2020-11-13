/* global expect, describe, it */

import React from 'react'
import { mount } from 'enzyme'
import { AppRoute } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('AppRoute component', () => {
    let appRouteProps
    let appRoute
    let DummyComponent

    it('should be defined', () => {
        expect(AppRoute).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            DummyComponent = function () {
                return <div>Dummy</div>
            }
        })

        it('should have CompFixture component', () => {
            appRoute = mount(
                <MemoryRouter
                    initialEntries={['/one', { pathname: '/two' }]}
                    initialIndex={1}
                >
                    <AppRoute component={DummyComponent} {...appRouteProps} />
                </MemoryRouter>
            )
            expect(appRoute.find(DummyComponent).exists()).toBeTruthy()
        })
    })
})