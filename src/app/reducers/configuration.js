import Immutable from 'seamless-immutable'
import { createActions, handleActions } from 'redux-actions'

export const {
    setConfigurationRequestStatus
} = createActions(
    {},
    'SET_CONFIGURATION_REQUEST_STATUS'
)

export const defaultState = Immutable.from({
    configurationRequestStatus: 'initial',
    launchId: undefined
})

const reducer = launchId => handleActions(
    {
        [setConfigurationRequestStatus]: (state, { payload: configurationRequestStatus }) =>
            state.merge({ configurationRequestStatus })
    },
    defaultState.merge({ launchId })
)

export default reducer