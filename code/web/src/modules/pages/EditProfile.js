// Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Button from '../../ui/button'
import Input from '../../ui/input/Input'
import H3 from '../../ui/typography/H3'
import Icon from '../../ui/icon'
import { level1 } from '../../ui/common/shadows'
import { white } from '../../ui/common/colors'

// App Imports
import { updateUserInformation } from '../user/api/actions'

// Component
class EditProfile extends Component {

  constructor(props) {
    super(props)
    console.log('user', props.user);
    this.state = {
      id: this.props.user.details.id,
      name: this.props.user.details.name,
      email: this.props.user.details.email,
      description: this.props.user.details.description,
      shippingAddress: this.props.user.details.shippingAddress,
      userImage: this.props.user.details.userImage,
      role: this.props.user.details.role
    }
  }

  saveProfile = (e) => {
    e.preventDefault();
    this.props.updateUserInformation(this.state)
  }

  handleInput = (e) => {
    const stateKey = e.target.id;
    this.setState({[stateKey]: e.target.value})
  }

  render() {
    return (
      <section style={{display: 'flex', justifyContent: 'center'}}>
        <form style={
          {display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'space-between',
          height: '100%',
          width: '55%',
          padding: '3%',
          backgroundColor: '#7367F0',
          color: 'white',
          marginTop: '5%',
          borderRadius: '10px'}} onSubmit={this.saveProfile}
        >
          <div style={{display: 'flex', flexDirection: 'row', margin: '2%', justifyContent: 'center'}}>
            <label style={{display: 'flex', alignItems: 'center'}} htmlFor="name">Name: </label>
            <Input
              style={{color: 'white', marginLeft: '2%'}}
              onChange={this.handleInput}
              id="name"
              type="text"
              value={this.state.name}>
            </Input>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '2%', justifyContent: 'center'}}>
            <label style={{display: 'flex', alignItems: 'center'}} htmlFor="email">Email: </label>
            <Input
              style={{color: 'white', marginLeft: '2%'}}
              onChange={this.handleInput}
              id="email"
              type="text"
              value={this.state.email}>
            </Input>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '2%', justifyContent: 'center', width: '100%'}}>
            <label style={{display: 'flex', alignItems: 'center'}} htmlFor="shippingAddress">Shipping Address: </label>
            <Input
              style={{color: 'white', marginLeft: '2%'}}
              onChange={this.handleInput}
              id="shippingAddress"
              type="text"
              value={this.state.shippingAddress}>
            </Input>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', margin: '2%', justifyContent: 'center', width: '100%'}}>
            <label style={{display: 'flex', alignItems: 'center'}} htmlFor="description">Description: </label>
            <Input
              style={{color: 'white', marginLeft: '2%'}}
              onChange={this.handleInput}
              id="description"
              type="text"
              value={this.state.description}>
            </Input>
          </div>
          <button style={{backgroundColor: '#CE9FFC', padding: '2%', borderRadius: '5px', color: 'white'}}>Save Profile</button>
        </form>
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
