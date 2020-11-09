import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './storage'
import { ConnectedRouter } from 'connected-react-router'
import App from './App'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
