import { put, select } from 'redux-saga/effects'
import {
    getResourceById,
    getUrlByType,
    selectors,
    VIDEO_URL,
    WORKSHEET_URL,
    E_BOOK_URL,
    DOCUMENT_LINK
} from './resources'
import { ResourceTypes } from '../entities'
import { ResourcesActions } from '../reducers'

const stepper = fn => mock => fn.next(mock).value

describe('Resources Saga', () => {
    let step

    describe('getResourceById saga', () => {
        beforeEach(() => {
            step = stepper(getResourceById('resId'))
        })

        it('should select resources props', () => {
            expect(step()).toEqual(select(selectors.resourcesProps))
        })

        describe('after select resources props', () => {
            beforeEach(() => {
                step()
            })

            it('should get resource url', () => {
                expect(step('Video')).
                    toEqual(put(ResourcesActions.setResourceUrl('')))
            })
        })
    })

    describe('getUrlByType function', () => {

        it('should return correct url depends on type', () => {
            expect(getUrlByType(ResourceTypes.RESOURCE_TYPE_DOCUMENT)).toEqual(DOCUMENT_LINK)
            expect(getUrlByType(ResourceTypes.RESOURCE_TYPE_E_TEXT_BOOK)).toEqual(E_BOOK_URL)
            expect(getUrlByType(ResourceTypes.RESOURCE_TYPE_WORKSHEET)).toEqual(WORKSHEET_URL)
            expect(getUrlByType(ResourceTypes.RESOURCE_TYPE_VIDEO)).toEqual(VIDEO_URL)
            expect(getUrlByType('')).toEqual('')
        })
    })
})

describe('should have proper selector', () => {
    const resourceProps = selectors.resourcesProps({
        resources: {
            resourceType: 'Video'
        }
    })

    expect(resourceProps.resourceType).toBeDefined()
    expect(resourceProps.resourceType).toEqual('Video')
})