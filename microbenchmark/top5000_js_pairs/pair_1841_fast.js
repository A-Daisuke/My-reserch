const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = 20000;
          while (VAR_1--) {
            FUNCTION_2()(VAR_1, VAR_1);
          }
          function FUNCTION_2() {
            return FUNCTION_1;
          }
          function FUNCTION_1(VAR_2, VAR_4) {
            return VAR_2 * VAR_4;
          }
          FUNCTION_2(1);
        })();
    }
};