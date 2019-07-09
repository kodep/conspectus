import styled from 'styled-components'

export const Container = styled.div`
  text-align: center;
`;

export const Form = styled.form`
  background-color: #CDCDD0;
  padding: 0;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Sans';

`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  font-size: 25px;
  /* color: white; */
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Action = styled.input`
  margin: 5px 0 5px 0;
  font-size: 25px;
  border-radius: 8px;
  border-color: black;
`;

export const SubmitButton = styled.button`
  font-size: 25px;
  padding: 5px 60px;
  /* width: 200px; */
  /* margin-top: 5px; */
  display: flex;
  justify-content: center;
`;

export const PendingDiv = styled.div`
  color: orange;
`;

export const SuccessDiv = styled.div`
  color: green;
`;
export const ErrorDiv = styled.div`
  color: red;
`;
