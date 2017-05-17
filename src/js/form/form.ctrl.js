'use strict';

module.exports = function FormCtrl($state, $log) {
  var formCtrl = this;

  $log.info('form');

  formCtrl.mobileNumberPattern = (function() {
    /*
     * https://en.wikipedia.org/wiki/Telephone_numbers_in_China
     * only allow 3,4,5,7,8 on second place
     */
    var PHONE_REGEXP = /(1[34578]\d{9})/;
    return {
      test: function(value) {
        if (formCtrl.phonenumber === false) {
          return true;
        }
        // const isPattern = PHONE_REGEXP.test(value);

        return PHONE_REGEXP.test(value);
      }
    };
  })();

  formCtrl.submit = function() {
    // const post_data = JSON.stringify(formCtrl.user);
    // $log.info(post_data);
    // $http({
    //   method:"POST",
    //   url:"",
    //   data:post_data
    // }).then(function(response) {
    //   formCtrl.submitted = true;
    //   $state.go('success');
    // })

    $state.go('success');
  };
};
