import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import configuration, * as ActionsFromConfiguration from './configuration'

export const ConfigurationActions = ActionsFromConfiguration

const urlParams = new URLSearchParams(window.location.search)
const launchId = urlParams.has('launchId') ? urlParams.get('launchId') : undefined

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    configuration: configuration(launchId)
})

export default createRootReducer