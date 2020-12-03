import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import configuration, * as ActionsFromConfiguration from './configuration'
import resources, * as ActionsFromResources from './resources'

export const ConfigurationActions = ActionsFromConfiguration
export const resourcesActions = ActionsFromResources

const urlParams = new URLSearchParams(window.location.search)
const launchId = urlParams.has('launchId') ? urlParams.get('launchId') : undefined

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    configuration: configuration(launchId),
    resources: resources()
})

export default createRootReducer