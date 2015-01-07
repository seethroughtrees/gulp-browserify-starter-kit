'use strict';

var Reflux = require('reflux'),
    leverService = require('../services/levers_service'),
    Actions, getLever;

/**
 * access to get lever from service
 * @param  {String} lever  [lever to get]
 * @param  {Function} cb   [Call success action]
 * @param  {Function} errCb [Call failure action]
 * @return {Function}     [Returns service function]
 */
getLever = function getLever(lever, cb, errCb) {
  lever = lever || 'revenue';
  return leverService.getLever(lever, cb, errCb);
};

Actions = Reflux.createActions({
  load: {children: [
    'completed',
    'failed'
  ]}
});

Actions.load.listen(function(lever) {
  getLever(lever, Actions.load.completed, Actions.load.failed);
});

module.exports = Actions;