const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          while (VAR_1 > 0) {
            VAR_2 += VAR_1;
            VAR_1 -= 1;
          }
          return VAR_2;
        }
        FUNCTION_1(25000);
    }
};