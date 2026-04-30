const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = 0;
          while (VAR_2 > 0) {
            VAR_3 += VAR_1;
            VAR_2--;
          }
          return VAR_3;
        }
        FUNCTION_1(12, 1000);
    }
};