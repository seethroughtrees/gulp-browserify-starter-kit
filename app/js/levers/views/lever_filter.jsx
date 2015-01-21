'use strict';

var React            = require('react/addons'),
    RP               = React.PropTypes,
    Router           = require('react-router'),
    $                = require('domtastic'),
    nocase           = require('to-no-case'),
    LeverActions     = require('../lever_actions'),
    colorScheme      = require('../../util/colors-util'),
    View;

View = React.createClass({

  mixins: [
    Router.State,
    Router.Navigation
  ],

  propTypes: {
    columns: RP.array.isRequired,
    column: RP.string.isRequired,
    itemNumber: RP.number.isRequired,
    isActive: RP.bool.isRequired
  },

  handleClick: function(e) {
    var val = $(e.target.parentNode).attr('data-name');
    e.preventDefault();

    LeverActions.setColumns(this.props.columns, this.props.query.hideColumns, val);
  },


  // Set the span colors to match the data.
  addFilterSpanStyle: function() {
    var color;

    // always make 'growth' the same color
    if (this.props.column === 'growth') {
      color = colorScheme.y2;
    } else {
      color = colorScheme[this.getParams().lever][this.props.itemNumber];
    }

    return {
      background: color,
      border: '1px solid ' + color
    };
  },

  render: function() {

    var cx = React.addons.classSet,
        classes = cx({
          'filter__filter': true,
          'is-active': this.props.isActive
        });

    return (
      <li className={classes}
          itemNumber={this.props.itemNumber}
          data-name={this.props.column}
          onClick={this.handleClick}>
        <span
          className="filter__span"
          style={this.addFilterSpanStyle()}></span>
        <div>{nocase(this.props.column)}</div>
      </li>
    )
  }
});

module.exports = View;