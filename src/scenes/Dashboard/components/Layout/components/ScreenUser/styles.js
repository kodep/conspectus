import styled from 'styled-components';
import BcdUiButton from 'bcd-front/ui/controls/Button';
import palette from 'bcd-front/ui/colors/palette';

export const Button = styled(BcdUiButton)`
  && {
    color: ${(p: any) => (p.theme.type === 'dark' ? palette['grey-200'] : palette['grey-500'])};
    &:hover {
      color: ${(p: any) => (p.theme.type === 'dark' ? palette['white'] : palette['grey-900'])};
    }
    &:active {
      color: ${(p: any) => (p.theme.type === 'dark' ? palette['white'] : palette['grey-900'])};
    }
  }
`;

export const ActionButton = styled(Button)`
  & svg {
    max-width: 8px;
    min-width: 8px;
    margin-left: 8px;
    margin-right: 8px;
    position: relative;
    top: 2px;
  }
`;

export const UserActionTooltip = styled.div`
  min-width: 154px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(p: any) => (p.theme.type === 'dark' ? palette['black'] : palette['white'])};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  & hr {
    margin: 4px 0;
  }
  & ${Button} {
    margin: 4px;
  }
`;

export const UserActionsDropdown = styled.div`
  padding-left: 12px;
  font-size: 12px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBlock = styled.div`
  width: 100%;
