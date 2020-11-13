import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const AppRoute = ({ path, component: Component, ...rest }) => (
    <Route
        {...rest}
        path={path}
        render={
            props => (
                <Component {...props} />
            )
        }
    />
)

AppRoute.propTypes = {
    component: PropTypes.any.isRequired,
    path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ])
}

export default AppRoute