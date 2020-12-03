
import { put, select } from 'redux-saga/effects'
import { ResourcesActions } from '../reducers'
import { ResourceTypes } from '../entities'

export const VIDEO_URL = 'https://education-qa.wiley.com/content/Black_Business_Statistics_9e/media/simulations/video/lecture_videos/Black_7e_Video_Ch09.4.html'
export const E_BOOK_URL = 'https://online.vitalsource.com/#/user/sso'
export const DOCUMENT_LINK = 'https://education-qa.wiley.com/wpng/api/v1/content/resource/68003cf4-5502-4418-818b-4f75cc20f207'
export const WORKSHEET_URL = 'https://education-qa.wiley.com/content/Black_Business_Statistics_9e/media/simulations/addres/Excel_Manual/Black_9e_Excel_Manual_Ch02.pdf'

export const selectors = {
    resourcesProps: ({
        resources: {
            resourceType
        }
    }) =>
        ({
            resourceType
        })
}

export const getUrlByType = resourceType => {
    let url = ''

    switch (resourceType) {
    case ResourceTypes.RESOURCE_TYPE_VIDEO:
        url = VIDEO_URL
        break
    case ResourceTypes.RESOURCE_TYPE_DOCUMENT:
        url = DOCUMENT_LINK
        break
    case ResourceTypes.RESOURCE_TYPE_E_TEXT_BOOK:
        url = E_BOOK_URL
        break
    case ResourceTypes.RESOURCE_TYPE_WORKSHEET:
        url = WORKSHEET_URL
        break
    default:
        break
    }
    return url
}

export function * getResourceById () {
    const { resourceType } = yield select(selectors.resourcesProps)
    const url = getUrlByType(resourceType)

    yield put(ResourcesActions.setResourceUrl(url))
}
