/* global expect, describe, it, beforeEach */

import React from 'react'
import { mount } from 'enzyme'
import { AppNavBar } from '.'

describe('AppNavBar component', () => {
    let appNavBar

    it('should be defined', () => {
        expect(AppNavBar).toBeDefined()
    })

    beforeEach(() => {
        appNavBar = mount(<AppNavBar />)
    })

    it('', () => {
        expect(appNavBar.find('h2').exists()).toBeTruthy()
    })
})