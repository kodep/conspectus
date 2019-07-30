import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CommentForm = styled.div`
  margin-left: 50px;
`;

export const Comment = styled.div`
  margin: 0 0 10px 42px;
  color: grey;
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;
