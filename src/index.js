import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'connected-react-router'
import './index.css'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <ConnectedRouter>
            <App />
        </ConnectedRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
