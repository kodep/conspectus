import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router'
import { Container, Form, Label, ContainerForm, FieldWrapper, SubmitButton, ValidateMessage, Title } from './style';

class LoginForm extends PureComponent {

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
            <FieldWrapper>
              <Field type="email" name="email" component="input" placeholder="Login" />
            </FieldWrapper>
            <FieldWrapper>
              <Field type="password" name="password" component="input" placeholder="Password" />
            </FieldWrapper>
            {isLoginPending && <ValidateMessage color="orange">Authorization</ValidateMessage>}
            {isLoginSuccess && <Redirect to="/my-meeting"/>}
            {loginError && <ValidateMessage color="red">{loginError}</ValidateMessage>}
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
