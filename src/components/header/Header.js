import React, { Component, Fragment } from 'react';
import {
  SuperHeader,
  HeaderWrapper,
  Score,
  Title
} from './Header.styled.js';

class Header extends Component {

  formatScore(score) {
    if (score > 999 && score < 1000000) {
        return `${(score/1000)}k`; // convert to 'k' for number from > 1000 < 1 million
    } else {
      return score // return score as is
    }
    //future work: convert to 'm' for number from > 1 million?
}

  render() {
    return (
      <Fragment>
        <SuperHeader>{this.props.userName}</SuperHeader>
        <HeaderWrapper>
          <Score>{this.formatScore(this.props.score)}</Score>
          <Title>{this.props.title}</Title>
        </HeaderWrapper>
      </Fragment>
    );
  }
}

export default Header;
