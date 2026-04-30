const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = 20000;
          while (VAR_1--) {
            FUNCTION_1(VAR_1)(VAR_1);
          }
          function FUNCTION_1(VAR_2) {
            return function b(VAR_3) {
              return VAR_2 * VAR_3;
            };
          }
          FUNCTION_1(1);
        })();
    }
};