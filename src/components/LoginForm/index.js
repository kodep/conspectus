import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer/reducer'
import { Container, Form, Label, ContainerForm, Action, SubmitButton, PendingDiv, SuccessDiv, ErrorDiv } from './style';

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
            <Label>Логин</Label>
            <Action type="email" name="email" onChange={e => this.setState({email: e.target.value})}/>
            <Label>Пароль</Label>
            <Action type="password" name="password" onChange={e => this.setState({password: e.target.value})}/>
            {isLoginPending && <PendingDiv>Авторизация</PendingDiv>}
            {isLoginSuccess && <SuccessDiv>Авторизация прошла успешно</SuccessDiv>}
            {loginError && <ErrorDiv>{loginError.message}</ErrorDiv>}
            <SubmitButton>Войти</SubmitButton>
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
