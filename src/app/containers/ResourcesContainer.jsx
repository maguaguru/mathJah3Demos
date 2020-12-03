import { connect } from 'react-redux'
import Resources from '../components/Resources/Resources'
import { getResourceById, changeResourceType } from '../reducers/resources'

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
    changeResourceType: resourceType => dispatch(changeResourceType(resourceType)),
    getResourceById: resourceId => dispatch(getResourceById(resourceId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Resources)