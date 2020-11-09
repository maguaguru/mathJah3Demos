import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from '../reducers'
import rootSaga from '../sagas'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagas = createSagaMiddleware()

export const history = createHashHistory({ basename: '' })
const reducer = createRootReducer(history)
const routers = routerMiddleware(history)

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(routers, sagas)
    )
)

sagas.run(rootSaga)

export default store
