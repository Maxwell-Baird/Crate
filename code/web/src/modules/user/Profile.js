// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>
    {console.log(props)}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* user description */}
        {/* user image */}
        {/* shipping address */}
        {/* availability (days and times) */}
        {/* product history (past orders) */}
        {/* upcoming deliveries */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// this grid will display the state props
// button for editing the user profile will be here as well, will route to another page
// to edit the profile, meaning another component (editProfile.js)
// inside that component will have the ability to upload a user picture, set a description, edit dates available,
// edit shipping and email address, see a history of products purchased / what's been kept.
// and also see upcoming deliveries

// components needed:
// edit profile button - button displayed on profile
// user image - section containing image tag  <img>
// user description - P tag displayed on profile
// dates available - P tag displayed on profile
// product history - P tag displayed on profile
// shipping and email address - P tag displayed on profile
// upcoming deliveries - P tag displayed on profile

// controlled form component to edit all of the above components - navigated to using edit profle button
// for cohesiveness, stick to the same level and organization of styling used prior (components for H1s, ptags, etc)


// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
