import React, { PureComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Box, Container } from '@material-ui/core'
import { AppNavBarContainer, AppRouteContainer, MathJahTexChtmlContainer } from './containers'

class Test extends PureComponent {
    render () {
        return (
            <Box flexGrow={1} flexDirection="column" display="flex" justifyContent="center" alignItems="center">
                Content Coming Soon!
            </Box>
        )
    }
}

class App extends PureComponent {

    render () {
        return (
            <Box display="flex" flexDirection="column" height="100vh">
                <Route path="/main/:tab?" component={AppNavBarContainer} />
                <Box flexGrow={1} style={{ overflowY: 'auto' }} bgcolor="grey.50">
                    <Container fixed>
                        <Box p={4}>
                            <Switch>
                                <AppRouteContainer path="/main/tex-chtml" component={MathJahTexChtmlContainer} />
                                <AppRouteContainer path="/main" component={Test} />
                                <Route>
                                    <Redirect to="/main" />
                                </Route>
                            </Switch>
                        </Box>
                    </Container>
                </Box>
            </Box>
        )
    }
}

export default App
