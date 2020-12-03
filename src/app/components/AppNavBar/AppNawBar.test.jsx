/* global expect, describe, it, beforeEach */

import React from 'react'
import { mount } from 'enzyme'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { AppNavBar } from '.'
import {
    NavigationTabs
} from '../../entities'

describe('AppNavBar component', () => {
    let appNavBar
    let appNavBarProps

    it('should be defined', () => {
        expect(AppNavBar).toBeDefined()
    })

    beforeEach(() => {
        appNavBarProps = {
            lainchId: '',
            tab: NavigationTabs.TEX_CHTML,

            changeTab: jest.fn()
        }
        appNavBar = mount(<AppNavBar {...appNavBarProps} />)
    })

    it('should have main AppBar component', () => {
        expect(appNavBar.find(AppBar).exists()).toBeTruthy()
    })

    it('should have all Tab components', () => {
        const navTabItems = appNavBar.find(Tabs).find(Tab)

        expect(navTabItems).toHaveLength(3)
        expect(navTabItems.at(0).text()).toBe('resources-test')
        expect(navTabItems.at(1).text()).toBe('tex-chtml')
        expect(navTabItems.at(2).text()).toBe('tex-svg')
    })
})