import Immutable from 'seamless-immutable'
import { createActions, handleActions } from 'redux-actions'

export const {
    getConfigurationFile,
    setConfigurationRequestStatus,
    setConfiguration,
    getLaunchContext,
    setLaunchContextRequestStatus,
    setLaunchContext,
    setFeatureToggles
} = createActions(
    {},
    'GET_CONFIGURATION_FILE',
    'SET_CONFIGURATION_REQUEST_STATUS',
    'SET_CONFIGURATION',
    'GET_LAUNCH_CONTEXT',
    'SET_LAUNCH_CONTEXT_REQUEST_STATUS',
    'SET_LAUNCH_CONTEXT',
    'SET_FEATURE_TOGGLES'
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