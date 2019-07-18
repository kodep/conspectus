import React from 'react'
import LoginForm from './Forms/LoginForm'
import { login } from '../redux/actions/auth'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
  submit = values => {
    const { loginAction } = this.props
    loginAction(values)
  }
  render() {
    const { auth } = this.props
    return <LoginForm onSubmit={this.submit} authData={auth}/>
  }
}

const mapStateToProps = state => {
  return {
    auth: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (data) => dispatch(login(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)