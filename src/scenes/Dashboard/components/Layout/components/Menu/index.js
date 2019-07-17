import React, { PureComponent } from 'react';
import Screen from 'bcd-front/ui/layout/Screen';
import { ActiveUser } from 'containers/ActiveUser';

export class Menu extends PureComponent {
  render() {
    return (
      <ActiveUser>
        {({ activeUser }) => (
          <Screen.TopMenu>
            <Screen.TopNavLink to="/my-mitting">Мой митинг</Screen.TopNavLink>
          </Screen.TopMenu>
        )}
      </ActiveUser>
    );
  }
}
