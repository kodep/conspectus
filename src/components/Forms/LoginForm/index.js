import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../../redux/actions/auth'
import { Container, Form, Label, ContainerForm, Action, SubmitButton, ValidatePending, ValidateSuccess, ValidateError, Title } from './style';

class LoginForm extends PureComponent {

  state = {};

  render() {
    const { handleSubmit, authData } = this.props;
    const { isLoginPending, isLoginSuccess, loginError } = authData
    console.log('props', loginError)
    return (
      <Container >
        <Form name="LoginForm" onSubmit={handleSubmit}>
          <ContainerForm>
            <Title>
              <Label>Conspectus</Label>
            </Title>
            <Action>
              <Field type="email" name="email" component="input" placeholder="Login" />
            </Action>
            <Action>
              <Field type="password" name="password" component="input" placeholder="Password" />
            </Action>
            {/* <Action type="email" name="email" placeholder="Login" onChange={e => this.setState({email: e.target.value})}/>
            <Action type="password" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})}/> */}
            {isLoginPending && <ValidatePending>Authorization</ValidatePending>}
            {isLoginSuccess && <ValidateSuccess>Login was successful</ValidateSuccess>}
            {loginError !== undefined && <ValidateError>{loginError}</ValidateError>}
            <SubmitButton type="submit">Sign in</SubmitButton>
          </ContainerForm>
        </Form>
      </Container>
    )
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   let { email, password } = this.state;
  //   this.props.login(email, password);
  // };
}


// const mapStateToProps = (state) => {
//   return {
//     isLoginPending: state.isLoginPending,
//     isLoginSuccess: state.isLoginSuccess,
//     loginError: state.loginError
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     login: (email, password) => dispatch(login(email, password))
//   }
// }

LoginForm = reduxForm({
  form: 'contact'
})(LoginForm)


export default LoginForm;
