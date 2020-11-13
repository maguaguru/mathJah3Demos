import React, { PureComponent } from 'react'
import { Route } from 'react-router-dom'
import { Box } from '@material-ui/core'
import AppNavBarContainer from "./containers/AppNavBarContainer";

class App extends PureComponent {
    render () {
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                <Route path="/main/:tab?" component={AppNavBarContainer} />
            </Box>
        )
    }
}

export default App
