import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/faSignOutAlt';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import Tooltip from 'bcd-front/ui/layout/Tooltip';
import { destroySession } from 'utils/session';
import { ActiveUser } from 'containers/ActiveUser';
import { Button, UserActionsDropdown, ActionButton, UserActionTooltip, ButtonBlock } from './style';

function ScreenUserMenu(props) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    destroySession();
    props.history.push('/signin');
  };

  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);
  return (
    <ActiveUser>
      {({ activeUser }) => (
        <UserActionsDropdown>
          <ActionButton view="pseudo" text={activeUser.email} onAction={toggleUserMenu}>
            <FontAwesomeIcon icon={faAngleDown} />
          </ActionButton>
          {showUserMenu && (
            <Tooltip notail transparent>
              <UserActionTooltip>
                <ButtonBlock>
                  <Button view="pseudo" text="Выход" icon={faSignOutAlt} onAction={handleLogout} />
                </ButtonBlock>
              </UserActionTooltip>
            </Tooltip>
          )}
        </UserActionsDropdown>
      )}
    </ActiveUser>
  );
}

export const ScreenUser = withRouter(ScreenUserMenu);
