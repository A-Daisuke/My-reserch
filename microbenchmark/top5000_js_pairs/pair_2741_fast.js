const Benchmark = {
    run: function() {
        (function () {
          function FUNCTION_1() {
            true === true;
          }
          var VAR_2 = 100000;
          var VAR_3 = VAR_2 % 8;
          while (VAR_3--) {
            FUNCTION_1();
          }
          VAR_3 = (VAR_2 * 0.125) ^ 0;
          while (VAR_3--) {
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
            FUNCTION_1();
          }
        })();
    }
};