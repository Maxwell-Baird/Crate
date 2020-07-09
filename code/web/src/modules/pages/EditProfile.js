// // Imports
// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { Link, withRouter } from 'react-router-dom'
// import { Helmet } from 'react-helmet'
//
// // UI Imports
// import { Grid, GridCell } from '../../ui/grid'
// import Button from '../../ui/button'
// import ImageTile from '../../ui/image/Tile'
// import Input from '../../ui/input/Input'
// import H3 from '../../ui/typography/H3'
// import Icon from '../../ui/icon'
// import { level1 } from '../../ui/common/shadows'
// import { white } from '../../ui/common/colors'
//
// // App Imports
// import { APP_URL } from '../../setup/config/env'
// import userRoutes from '../../setup/routes/user'
// import { messageShow, messageHide } from '../common/api/actions'
// import { login } from './api/actions'
// import AuthCheck from '../auth/AuthCheck'
//
// // Component
// class editProfile extends Component {
//
//   constructor(props) {
//     super(props)
//
//     this.state = {
//       name: this.props.user.name ? this.props.user.name : '',
//       email: '',
//       password: '',
//       description: '',
//       shippingAddress: '',
//       availability: {
//         daysAvailable: [],
//         timesAvailable: []
//       },
//       imageUrl: '',
//       pastPackages: [],
//       futurePackages: []
//     }
//   }
//
//   render() {
//     return (
//       <section>
//         <input type="text">{this.state.name}</input>
//         <input type="text">{this.state.email}</input>
//         <input type="text">{this.state.description}</input>
//       </section>
//     )
//   }
// }
