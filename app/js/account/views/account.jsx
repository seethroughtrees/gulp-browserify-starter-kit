'use strict';

var React            = require('react/addons'),
    Reflux           = require('reflux'),
    Router           = require('react-router'),
    RP               = React.PropTypes,
    AccountActions   = require('../account_actions'),
    AccountStore     = require('../account_store'),
    Header           = require('../../main/views/header.jsx'),
    View;

View = React.createClass({

  propTypes: {
    params: RP.object.isRequired,
    query: RP.object.isRequired
  },

  mixins: [
    Reflux.listenTo(AccountStore, 'onLoadComplete'),
    Router.Navigation
  ],

  getInitialState: function() {
    return {
      subMenu: [],
      desc: ''
    };
  },

  // Create complete lever object
  onLoadComplete: function(account) {
    this.setState({
      subMenu: account.subMenu,
      desc: account.desc
    });
  },

  // when page is loaded, call lever action
  componentWillMount: function() {
    AccountActions.load();
  },

  render: function() {
    return (
      <main className="main__content">
        <Header
          handler={this.props.handler}
          params={this.props.params}
          query={this.props.query}
          title='Accounteroni'
          subMenu={this.state.subMenu}
        />
        <section>
          <h1>This is the account page</h1>
          <p>{this.state.desc}</p>
        </section>
      </main>
    );
  }
});

module.exports = View;