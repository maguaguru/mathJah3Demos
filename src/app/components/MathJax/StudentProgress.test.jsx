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
            expect(studentProgress.find('span[data-testid="studentProgressLabel"]').text()).toEqual('Progress')
        })

        it('should have progress bar element', () => {
            expect(studentProgress.find('div[data-testid="studentProgressBar"]').exists()).toBeTruthy()
        })

        it('should have correct count of studentProgressDivider ', () => {
            expect(studentProgress.find('line[data-testid="studentProgressDivider50"]').exists()).toBeTruthy()
            expect(studentProgress.find('line[data-testid="studentProgressDivider100"]').exists()).toBeFalsy()
        })

        it('should have correct count of studentPointsDivider ', () => {
            expect(studentProgress.find('line[data-testid="studentPointsDivider5"]').exists()).toBeTruthy()
            expect(studentProgress.find('line[data-testid="studentPointsDivider10"]').exists()).toBeTruthy()
        })

        it('should have current points label', () => {
            expect(studentProgress.find('span[data-testid="studentPointsLabel"]').text()).toEqual('Points')
        })

        it('should have current progress indicator', () => {
            expect(studentProgress.find('div[data-testid="studentCurrentProgressIndicator"]').exists()).toBeTruthy()
        })

        it('should have correct current progress label', () => {
            expect(studentProgress.find('p[data-testid="studentCurrentProgressLabel"]').text()).toEqual('Current Progress: -')
        })

        it('should have highest progress indicator', () => {
            expect(studentProgress.find('div[data-testid="studentHighestProgressIndicator"]').exists()).toBeTruthy()
        })

        it('should have correct highest progress label', () => {
            expect(studentProgress.find('p[data-testid="studentHighestProgressLabel"]').text()).toEqual('Highest Progress: -')
        })
    })

    describe('Render with current and highest progress', () => {
        beforeEach(() => {
            studentProgressProps = {
                pointsRange: [
                    { points: 5, range: 50 },
                    { points: 10, range: 100 }
                ],
                currentProgress: 45,
                highestProgres: 60
            }
            studentProgress = mount(<StudentProgress {...studentProgressProps} />)
        })

        it('should have current progress bar', () => {
            expect(studentProgress.find('rect[data-testid="studentCurrentProgressBar"]').exists()).toBeTruthy()
        })

        it('should have highest progress bar', () => {
            expect(studentProgress.find('rect[data-testid="studentHighestProgressBar"]').exists()).toBeTruthy()
        })

        it('should have correct current progress label', () => {
            expect(studentProgress.find('p[data-testid="studentCurrentProgressLabel"]').text()).toEqual('Current Progress: 45%')
        })

        it('should have correct highest progress label', () => {
            expect(studentProgress.find('p[data-testid="studentHighestProgressLabel"]').text()).toEqual('Highest Progress: 60%')
        })
    })
})