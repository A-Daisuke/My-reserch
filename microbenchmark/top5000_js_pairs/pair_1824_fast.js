const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          var VAR_6 = 1;
          while (VAR_4 > 1) {
            VAR_6 = VAR_4 / 2 + VAR_6;
            VAR_4 = VAR_4 - 1;
          }
          return VAR_6;
        }
        FUNCTION_2(10000);
    }
};