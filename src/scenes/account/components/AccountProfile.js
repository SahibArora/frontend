import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AccountProfileScene from './../../../styled_scenes/Account/Profile';
import { Page, PageContent } from './../../../shared_components/layout/Page';
import TopBar from '../../../shared_components/TopBar';

export default class AccountProfileComponent extends Component {
  static propTypes = {
    user_profile: PropTypes.object,
  };

  componentDidMount() {}

  render() {
    return (
      <PageContent padding="24px">
        <AccountProfileScene {...this.props} />
      </PageContent>
    );
  }
}
