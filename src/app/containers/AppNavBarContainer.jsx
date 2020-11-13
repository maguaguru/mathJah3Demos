import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { withRouter } from 'react-router'
import { AppNavBar } from '../components'
import { appNavBarSelector as mapStateToProps } from '../selectors'

const mapDispatchToProps = dispatch => ({
    changeTab: (skip, tab) => dispatch(push(`/main/${tab}`))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNavBar))