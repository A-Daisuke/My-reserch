const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1) {
            FUNCTION_1(VAR_1 - 1);
          }
        }
        FUNCTION_1(7000);
    }
};