const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return !(VAR_1 % 2);
        }
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          if (!FUNCTION_1(VAR_3)) {
            VAR_2++;
          }
        }
    }
};