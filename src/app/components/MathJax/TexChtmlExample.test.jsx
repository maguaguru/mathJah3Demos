/* global expect, describe, it, beforeEach */

import React from 'react'
import { mount } from 'enzyme'
import { Box, TextareaAutosize, Typography } from '@material-ui/core'
import TexChtmlExample from './TexChtmlExample'

describe('TexChtmlExample component', () => {
    let texChtmlComponent

    it('should be defined', () => {
        expect(TexChtmlExample).toBeDefined()
    })

    beforeEach(() => {
        texChtmlComponent = mount(<TexChtmlExample />)
    })

    it('should have mathMlContent header', () => {
        expect(texChtmlComponent.find('h6[data-testid="mathMlContentHeader"]').at(0).text()).toEqual('MathMl content')
    })

    it('should have mathMlContent area', () => {
        expect(texChtmlComponent.find(TextareaAutosize).exists()).toBeTruthy()
    })

    it('should have mathMlContent apply button', () => {
        expect(texChtmlComponent.find('button[data-testid="applyMathMlContent"]').exists()).toBeTruthy()
    })
})