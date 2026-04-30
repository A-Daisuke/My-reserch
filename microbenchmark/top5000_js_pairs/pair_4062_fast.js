const Benchmark = {
    run: function() {
        function FUNCTION_3(VAR_4) {
          if (VAR_4 === 0) {
            return 1;
          } else {
            return VAR_4 * FUNCTION_3(VAR_4 - 1);
          }
        }
        FUNCTION_3(100);
    }
};