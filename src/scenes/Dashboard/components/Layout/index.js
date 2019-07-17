import React, { PureComponent } from 'react';
import { Menu } from './components/Menu';
import { ScreenUser } from './components/ScreenUser';

export class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div>
        <header title="Biocad.Vacation" ScreenUser={ScreenUser} themeButton>
          <Menu />
        </header>
        <div>{children}</div>
      </div>
    );
  }
}
