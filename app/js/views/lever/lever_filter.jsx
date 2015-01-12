'use strict';

var React            = require('react/addons'),
    RP               = React.PropTypes,
    $                = require('domtastic'),
    nocase           = require('to-no-case'),
    LeverActions     = require('../../actions/actions'),
    colorScheme      = require('../../util/colors-util'),
    View;

View = React.createClass({

  propTypes: {
    filter: RP.string.isRequired,
    leverTitle: RP.string.isRequired,
    itemNumber: RP.number.isRequired,
    isActive: RP.bool.isRequired
  },

  handleClick: function(e) {
    var val = $(e.target.parentNode).attr('data-name');

    e.preventDefault();

    LeverActions.toggleFilters(val);
  },

  addFilterSpanStyle: function() {
    return {
      background: colorScheme[this.props.leverTitle][this.props.itemNumber],
      border: '1px solid ' + colorScheme[this.props.leverTitle][this.props.itemNumber]
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
          data-name={this.props.filter}
          onClick={this.handleClick}>
        <span
          className="filter__span"
          style={this.addFilterSpanStyle()}></span>
        <div>{nocase(this.props.filter)}</div>
      </li>
    )
  }
});

module.exports = View;
