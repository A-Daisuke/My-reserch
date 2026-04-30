const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          for (VAR_9 = 0; --VAR_1 > 2; ) {
            VAR_10 = !(VAR_1 % 3) || !(VAR_1 % 5) ? VAR_9 + VAR_1 : VAR_9;
          }
          return VAR_9;
        }
        FUNCTION_1(10000);
    }
};