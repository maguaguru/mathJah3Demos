import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Typography,
    Select
} from '@material-ui/core'
import { ResourceTypes } from '../../entities'
import IframeResizer from 'iframe-resizer-react'

class Resources extends PureComponent {
    constructor (props) {
        super(props)

        this.handleChangeResourceType = this.handleChangeResourceType.bind(this)
    }

    componentDidMount () {
        const { getResourceById, resourceRequestStatus, resourceId, resourceUrl } = this.props
        if (!resourceUrl.length && resourceRequestStatus !== 'ok') {
            getResourceById(resourceId)
        }
    }

    handleChangeResourceType (event) {
        const { changeResourceType, getResourceById, resourceId } = this.props

        changeResourceType(event.target.value)
        getResourceById(resourceId)
    }

    render () {
        const { resourceUrl, resourceType } = this.props

        return (
            <Box p={4}>
                <Typography variant="h4" data-testid="resourceHeader">Resourse example</Typography>
                <Box
                    p={2}
                    width="200px"
                >
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="resourceTypes">Resource type</InputLabel>
                        <Select
                            data-testid="resourceTypes"
                            labelId="resourceTypes"
                            id="resourceTypes"
                            value={resourceType}
                            onChange={this.handleChangeResourceType}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {ResourceTypes.resourceTypes.map((resourceType, index) => (
                                <MenuItem key={index} value={resourceType}>{resourceType}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    p={4}
                    border={1}
                    borderColor="grey.200"
                    borderRadius={4}
                >

                    {resourceUrl && resourceUrl.length && resourceType !== ResourceTypes.RESOURCE_TYPE_DOCUMENT &&
                    <IframeResizer
                        log
                        data-testid="resourcesFrame"
                        src={resourceUrl}
                        style={{ width: '1px', minWidth: '100%' }}
                    />
                    /*<iframe data-testid="resourcesFrame" src={resourceUrl} width="100%" height="100%" />*/}

                    {resourceUrl && resourceUrl.length && resourceType === ResourceTypes.RESOURCE_TYPE_DOCUMENT &&
                    <Link href={resourceUrl}>
                        Document Link
                    </Link>}

                    {(!resourceUrl || !resourceUrl.length) &&

                    <Typography variant="body1" data-testid="resourceUnavailable">Resourse unavailable</Typography>}
                </Box>
            </Box>
        )
    }
}

Resources.propTypes = {
    resourceId: PropTypes.string.isRequired,
    resourceUrl: PropTypes.string,
    resourceType: PropTypes.string,
    resourceRequestStatus: PropTypes.string,
    getResourceById: PropTypes.func.isRequired,
    changeResourceType: PropTypes.func.isRequired
}

export default Resources