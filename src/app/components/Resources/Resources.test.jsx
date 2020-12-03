/* global expect, describe, it, beforeEach */
import React from 'react'
import { mount } from 'enzyme'
import Resources from './Resources'

describe('Resources component', () => {
    let resources
    let resourcesProps

    it('should be defined', () => {
        expect(Resources).toBeDefined()
    })

    describe('Render', () => {

        beforeEach(() => {
            resourcesProps = {
                resourceId: 'testResId',
                resourceUrl: '',
                resourceRequestStatus: 'initial',
                getResourceById: jest.fn()
            }

            resources = mount(<Resources {...resourcesProps} />)
        })

        it('should have correct header', () => {
            expect(resources.find('h4[data-testid="resourceHeader"]').text()).toEqual('Resourse example')
        })

        it('should have message "Resourse unavailable"', () => {
            expect(resources.find('p[data-testid="resourceUnavailable"]').text()).toEqual('Resourse unavailable')
        })
    })

    describe('Rendering with not empthy resource url', () => {
        beforeEach(() => {
            resourcesProps = {
                resourceId: 'testResId',
                resourceRequestStatus: 'ok',
                resourceUrl: 'http://localhost:80808/resources',
                getResourceById: jest.fn()
            }

            resources = mount(<Resources {...resourcesProps} />)
        })

        it('should have iFrame for resource render', () => {
            expect(resources.find('iframe[data-testid="resourcesFrame"]').exists()).toBeTruthy()
        })
    })
})