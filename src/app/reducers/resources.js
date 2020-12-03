import Immutable from 'seamless-immutable'
import { createActions, handleActions } from 'redux-actions'

export const {
    getResourceById,
    changeResourceType,
    setResourceUrl
} = createActions(
    {},
    'GET_RESOURCE_BY_ID',
    'CHANGE_RESOURCE_TYPE',
    'SET_RESOURCE_URL'
)

export const defaultState = Immutable.from({
    resourceRequestStatus: 'initial',
    resourceType: '',
    resourceId: 'testResID',
    resourceUrl: ''
})

const reducer = launchId => handleActions(
    {
        [getResourceById]: state =>
            state.merge({ resourceRequestStatus: 'progress' }),
        [changeResourceType]: (state, { payload: resourceType }) =>
            state.merge({ resourceType: resourceType }),
        [setResourceUrl]: (state, { payload: resourceUrl }) =>
            state.merge({ resourceUrl: resourceUrl, resourceRequestStatus: 'ok' })
    },
    defaultState.merge({ launchId })
)

export default reducer