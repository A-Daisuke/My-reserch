const Benchmark = {
    run: function() {
        var VAR_1 = 20000;
        while (VAR_1--) {
          FUNCTION_1(VAR_1)();
        }
        function FUNCTION_1(VAR_2) {
          return function b() {
            return VAR_2 * 2;
          };
        }
        FUNCTION_1(1);
    }
};