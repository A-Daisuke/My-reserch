const Benchmark = {
    run: function() {
        var VAR_3 = 0;
        function FUNCTION_1(VAR_1) {
          if (VAR_1 == 0) {
            return;
          }
          VAR_3 += VAR_1;
          FUNCTION_1(VAR_1 - 1);
        }
        FUNCTION_1(1000);
    }
};