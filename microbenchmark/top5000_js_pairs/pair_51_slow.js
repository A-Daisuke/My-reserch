const Benchmark = {
    run: function() {
        var VAR_1 = 30;
        function FUNCTION_1(VAR_2) {
          if (VAR_2 === 0 || VAR_2 === 1) {
            return VAR_2;
          }
          return FUNCTION_1(VAR_2 - 2) + FUNCTION_1(VAR_2 - 1);
        }
        FUNCTION_1(VAR_1);
    }
};