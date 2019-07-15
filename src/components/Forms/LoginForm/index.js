import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Label, ContainerForm, Action, SubmitButton, ValidatePending, ValidateSuccess, ValidateError, Title } from './style';

class LoginForm extends PureComponent {

  state = {};

  render() {
    const { handleSubmit, authData } = this.props;
    const { isLoginPending, isLoginSuccess, loginError } = authData.auth;
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
            {isLoginPending && <ValidatePending>Authorization</ValidatePending>}
            {isLoginSuccess && <ValidateSuccess>Login was successful</ValidateSuccess>}
            {loginError && <ValidateError>{loginError}</ValidateError>}
            <SubmitButton type="submit">Sign in</SubmitButton>
          </ContainerForm>
        </Form>
      </Container>
    )
  };
}

LoginForm = reduxForm({
  form: 'contact'
})(LoginForm)


export default LoginForm;
