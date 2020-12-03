import { connect } from 'react-redux'
import Resources from '../components/Resources/Resources'
import { getResourceById } from '../reducers/resources'

const mapStateToProps = (
    {
        resources: {
            resourceId,
            resourceRequestStatus,
            resourceType,
            resourceUrl
        }
    }) => {
    return {
        resourceId,
        resourceRequestStatus,
        resourceType,
        resourceUrl
    }
}

const mapDispatchToProps = dispatch => ({
    getResourceById: resourceId => dispatch(getResourceById(resourceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Resources)