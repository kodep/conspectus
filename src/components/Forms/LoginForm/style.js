import styled from 'styled-components'

// const STATUS_COLORS = Object.freeze({
//   isLoginPending: "#F4AD46",
//   isLoginSuccess: "#22AA48",
//   loginError: "#D93B36"
// });

export const Container = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  padding: 0;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Sans';

`;

export const Title = styled.div`
  margin-bottom: 200px;
  font-family: 'Satisfy';
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  font-size: 60px;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Action = styled.div`
  margin: 0 0 15px 0;
  input {
    border-radius: 8px;
    border-color: #9555af;
    font-size: 25px;
    ::placeholder{
      font-size: 18px;
      padding: 0 0 0 10px;
    }
  }
`;

export const SubmitButton = styled.button`
  font-size: 20px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 2px 0;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 0.5em 1em;
  color: #ffffff;
  background-color: #9555af;
  :active{
    transform: translateY(1px);
    filter: saturate(150%);
  }
  :hover,
  :focus {
  color: #9555af;
  border-color: currentColor;
  background-color: white;
  }
`;

export const ValidatePending = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: orange;
`;

export const ValidateSuccess = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: green;
`;
export const ValidateError = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: red;
`;

// export const Validate = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   color: ${props => STATUS_COLORS[props.color]};
// `;
