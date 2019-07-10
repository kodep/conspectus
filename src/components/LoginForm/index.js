import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer/reducer'
import { Container, Form, Label, ContainerForm, Action, SubmitButton, ValidatePending, ValidateSuccess, ValidateError, Title } from './style';

class LoginForm extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let { email, password } = this.state;
    let { isLoginSuccess, isLoginPending, loginError } = this.props;

    return (
      <Container onSubmit={this.onSubmit}>
        <Form name="LoginForm">
          <ContainerForm>
            <Title>
            <Label>Cospectus</Label>
            </Title>
            <Action type="email" name="email" placeholder="Login" onChange={e => this.setState({email: e.target.value})}/>
            <Action type="password" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/>
            {isLoginPending && <ValidatePending>Authorization</ValidatePending>}
            {isLoginSuccess && <ValidateSuccess>Login was successful</ValidateSuccess>}
            {loginError && <ValidateError>{loginError.message}</ValidateError>}
            <SubmitButton>Sign in</SubmitButton>
          </ContainerForm>
        </Form>
      </Container>
    )
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
  };
}


const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
