import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    AppBar, Box, Container, Tab, Tabs
} from '@material-ui/core'
import {
    NavigationTabs
} from '../../entities'

class AppNavBar extends PureComponent {

    render () {
        const {
            tab,
            changeTab
        } = this.props

        return (
            <Box>
                <AppBar color="inherit" position="sticky">
                    <Container fixed>
                        <Tabs indicatorColor="primary" textColor="primary" value={tab} onChange={changeTab}>
                            {
                                NavigationTabs.tabs.map(navigationTab => (
                                    <Tab key={navigationTab} data-testid={`navigationTab${navigationTab}`} label={navigationTab} value={navigationTab} />
                                ))
                            }
                        </Tabs>
                    </Container>
                </AppBar>
            </Box>
        )
    }
}

AppNavBar.propTypes = {
    tab: PropTypes.oneOf([NavigationTabs.TEX_CHTML, NavigationTabs.TEXT_SVG]).isRequired,

    changeTab: PropTypes.func.isRequired
}

export default AppNavBar