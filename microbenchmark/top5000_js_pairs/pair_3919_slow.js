const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          if (VAR_1 <= 1) return 1;
          return VAR_1 / 2 + FUNCTION_1(VAR_1 - 1);
        }
        FUNCTION_1(1000);
    }
};