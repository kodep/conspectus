import styled from 'styled-components';
import BaseDatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const CalendarContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin: 10px 0 0 0;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #9555af;
  align-items: center;
  padding: 0 10px;
  color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderAction = styled(FontAwesomeIcon)`
  padding: 0 0 0 10px;
  cursor: pointer;
`;

export const DatePicker = styled(BaseDatePicker)`
  margin: 0 0 0 15px;
  border: 0;
  font-size: 20px;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`;

export const Body = styled.div`
  margin: 0 30px;
  padding: 20px 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  padding: 0 10px 0 0;
`;

export const HeaderLabel = styled.div`
  font-family: 'Satisfy';
`;

export const TasksList = styled.div`
  margin: 0 50px;
`;

export const ActionButton = styled.button`
  font-size: 20px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  margin: 15px 0;
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

export const Kek = styled.div`
  display: flex;
  justify-content: flex-end;
`;
