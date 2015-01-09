'use strict';

var numeral = window.numeral,
    _currencyFormat, _formatPartial, _format;

// _formatPartial = function(val) {
//   if (val === 0) {
//     return '-';
//   } else {
//     return function(cb) {
//       return cb(val);
//     }
//   }
// };

_currencyFormat = function _currencyFormat(val) {
  var format = val > 1000 ? '($0.0a)' : '($0.00a)';
  return numeral(val).format(format);
};

module.exports = [
  {
    title: 'Total Revenue',
    total: _currencyFormat(12600),
    today: _currencyFormat(423)
  },
  {
    title: 'Total Charges',
    total: numeral(62).format('0a'),
    today: numeral(4).format('0a')
  },
  {
    title: 'Total Customers',
    total: numeral(232).format('0a'),
    today: numeral(32).format('0a')
  },
  {
    title: 'Churn Rate',
    total: numeral(0.052).format('(0.0%)'),
    today: numeral(0.054).format('(0.0%)')
  },
  {
    title: 'ARPU',
    total: _currencyFormat(26.00),
    today: _currencyFormat(24.43)
  }
];
