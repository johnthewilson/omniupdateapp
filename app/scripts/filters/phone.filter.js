/**
 * Created by johnwilson on 3/14/16.
 */

(function() {
  'use strict';
  angular
    .module('abookApp')
    .filter('phone', phoneFn);

  phoneFn.$inject = [];
  function phoneFn () {
    return function (phoneStr) {
      var rez;

      if(phoneStr.length === 10) {
        rez = [];
        rez.push('(');
        rez.push(phoneStr.substring(0, 3));
        rez.push(') ');
        rez.push(phoneStr.substring(3, 6));
        rez.push('-');
        rez.push(phoneStr.substring(6));
        return rez.join('');
      }
      else {
        return phoneStr;
      }
    };
  }
})();
