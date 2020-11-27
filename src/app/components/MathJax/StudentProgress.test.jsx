/* global expect, describe, it, beforeEach */
import React from 'react'
import { mount } from 'enzyme'
import StudentProgress from './StudentProgress'

describe('StudentProgress component', () => {

    let studentProgress
    let studentProgressProps

    it('should be defined', () => {
        expect(StudentProgress).toBeDefined()
    })

    describe('Render without any progress', () => {
        beforeEach(() => {
            studentProgressProps = {
                pointsRange: [
                    { points: 5, range: 50 },
                    { points: 10, range: 100 }
                ]
            }
            studentProgress = mount(<StudentProgress {...studentProgressProps} />)
        })

        it('should have student progress label', () => {
            expect(studentProgress.find('p[data-testid="studentProgressLabel"]').text()).toEqual('Progress')
        })

        it('should have progress bar element', () => {
            expect(studentProgress.find('div[data-testid="studentProgressBar"]').exists()).toBeTruthy()
        })

        it('should have current points label', () => {
            expect(studentProgress.find('p[data-testid="studentPointsLabel"]').text()).toEqual('Points')
        })

        it('should have current progress indicator', () => {
            expect(studentProgress.find('div[data-testid="studentCurrentProgressIndicator"]').exists()).toBeTruthy()
        })

        it('should have current progress label', () => {
            expect(studentProgress.find('p[data-testid="studentCurrentProgressLabel"]').text()).toEqual('Current Progress:')
        })

        it('should have highest progress indicator', () => {
            expect(studentProgress.find('div[data-testid="studentHighestProgressIndicator"]').exists()).toBeTruthy()
        })

        it('should have highest progress label', () => {
            expect(studentProgress.find('p[data-testid="studentHighestProgressLabel"]').text()).toEqual('Highest Progress:')
        })
    })
})