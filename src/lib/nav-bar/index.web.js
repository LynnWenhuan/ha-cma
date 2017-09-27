/* eslint-disable eol-last */
import React from 'react';
import { NavBar } from 'antd-mobile';

export default class SinosafeNavBar extends React.Component {
  static defaultProps = {
    hasLeft: true,
  };
  static contextTypes = {
    router: React.PropTypes.object,
  };
  _onLeftClick = () => {
    if (this.props.hasLeft) {
      this.context.router.goBack();
    }
  };

  render() {
    const {
      onLeftClick, iconName, hasLeft, ...restProps
    } = this.props;
    return (
      <NavBar
        {...restProps}
        iconName={hasLeft ? iconName : ''}
        onLeftClick={onLeftClick || this._onLeftClick}
      >
        {this.props.children}
      </NavBar>
    );
  }
}
  