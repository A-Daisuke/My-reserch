const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 == 0) return 1;
          return VAR_1 * FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        function FUNCTION_2(VAR_5, VAR_6) {
          return Math.pow(VAR_5, VAR_6);
        }
        FUNCTION_1(2, 10);
    }
};