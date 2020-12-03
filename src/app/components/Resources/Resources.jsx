import React, { PureComponent } from 'react'
import { Box, MenuItem, Typography, Select } from '@material-ui/core'
import PropTypes from 'prop-types'

class Resources extends PureComponent {

    componentDidMount () {
        const { getResourceById, resourceRequestStatus, resourceId, resourceUrl } = this.props
        if (!resourceUrl.length && resourceRequestStatus !== 'ok') {
            getResourceById(resourceId)
        }
    }

    render () {
        const { resourceUrl, resourcesType } = this.props

        return (
            <Box p={4}>
                <Typography variant="h4" data-testid="resourceHeader">Resourse example</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={resourcesType}
                    onChange={this.handleChangeResourceType()}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>

                {resourceUrl && resourceUrl.length &&
                <iframe data-testid="resourcesFrame" src={resourceUrl} />}

                {(!resourceUrl || !resourceUrl.length) &&
                <Box display="flex" justifyContent="center" p={4} style={{ border: 'solid 1px #CCCCCC' }}><Typography variant="body1" data-testid="resourceUnavailable">Resourse unavailable</Typography></Box>}
            </Box>
        )
    }
}

Resources.propTypes = {
    resourceId: PropTypes.string.isRequired,
    resourceUrl: PropTypes.string,
    resourcesType: PropTypes.string,
    resourceRequestStatus: PropTypes.string,
    getResourceById: PropTypes.func.isRequired
}

export default Resources