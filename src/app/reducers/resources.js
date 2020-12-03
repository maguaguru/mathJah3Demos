import Immutable from 'seamless-immutable'
import { createActions, handleActions } from 'redux-actions'

const VIDEO_URL = 'https://education-qa.wiley.com/content/Black_Business_Statistics_9e/media/simulations/video/lecture_videos/Black_7e_Video_Ch09.4.html'
const E_BOOK_URL = 'https://online.vitalsource.com/#/user/sso'
const DOCUMENT_LINK = 'https://education-qa.wiley.com/wpng/api/v1/content/resource/68003cf4-5502-4418-818b-4f75cc20f207'
const WORKSHEET_URL = 'https://education-qa.wiley.com/content/Black_Business_Statistics_9e/media/simulations/addres/Excel_Manual/Black_9e_Excel_Manual_Ch02.pdf'

export const {
    getResourceById
} = createActions(
    {},
    'GET_RESOURCE_BY_ID'
)

export const defaultState = Immutable.from({
    resourceRequestStatus: 'initial',
    resourceType: '',
    resourceId: '',
    resourceUrl: ''
})

const reducer = launchId => handleActions(
    {
        [getResourceById]: state =>
            state.merge({ resourceRequestStatus: 'progress' })
    },
    defaultState.merge({ launchId })
)

export default reducer