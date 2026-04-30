const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_3) {
          var VAR_5 = 1;
          while (VAR_3 > 1) {
            VAR_5 = VAR_3 / 2 + VAR_5;
            VAR_3 = VAR_3 - 1;
          }
          return VAR_5;
        }
        FUNCTION_1(1000);
    }
};