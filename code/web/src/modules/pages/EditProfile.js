// Imports
import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
// import ImageTile from '../../ui/image/Tile'
import Input from '../../ui/input/Input'
import H3 from '../../ui/typography/H3'
import Icon from '../../ui/icon'
import { level1 } from '../../ui/common/shadows'
import { white } from '../../ui/common/colors'

// App Imports
// import { APP_URL } from '../../setup/config/env'
// import userRoutes from '../../setup/routes/user'
// import { messageShow, messageHide } from '../common/api/actions'
import { updateUserInformation } from '../user/api/actions'
// import AuthCheck from '../auth/AuthCheck'

// Component
class EditProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: this.props.user.details.name,
      email: this.props.user.details.email,
      password: '' ,
      description: '',
      shippingAddress: this.props.user.details.shippingAddress,
      availability: {
        daysAvailable: [],
        timesAvailable: []
      },
      imageUrl: '',
      pastPackages: [],
      futurePackages: []
    }
  }

  render() {
    return (
      <section>
        <p>Your Name Is</p>
        <input type="text" value={this.state.name}></input>
        <input type="text" value={this.state.email}></input>
        <input type="text" value={this.state.shippingAddress}></input>
      </section>
    )
  }
}

// Component State
function editProfileState(state) {
  return {
    user: state.user
  }
}

export default connect(editProfileState, { updateUserInformation })(withRouter(EditProfile))
