const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_2 == 0) return 1;
          return VAR_1 * FUNCTION_1(VAR_1, VAR_2 - 1);
        }
        function FUNCTION_2(VAR_3, VAR_4) {
          return Math.pow(VAR_3, VAR_4);
        }
        FUNCTION_2(2, 10000);
    }
};