const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          if (VAR_1 == 0) {
            return VAR_2;
          }
          VAR_2 += VAR_1;
          FUNCTION_1(VAR_1 - 1, VAR_2);
        }
        FUNCTION_1(1000);
    }
};