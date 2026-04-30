const Benchmark = {
    run: function() {
        var VAR_1 = 20000;
        while (VAR_1--) {
          FUNCTION_2()(VAR_1);
        }
        function FUNCTION_2(VAR_3) {
          return FUNCTION_1;
        }
        function FUNCTION_1(VAR_2) {
          return VAR_2 * 2;
        }
        FUNCTION_2(1);
    }
};