/* global expect, describe, it, beforeEach */

import React from 'react'
import { mount } from 'enzyme'
import TexChtmlExample from './TexChtmlExample'

describe('TexChtmlExample component', () => {
    let texChtmlComponent

    it('should be defined', () => {
        expect(TexChtmlExample).toBeDefined()
    })

    beforeEach(() => {
        texChtmlComponent = mount(<TexChtmlExample />)
    })
})