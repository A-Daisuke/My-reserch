const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_4) {
          var VAR_5 = 0;
          for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
            VAR_5 += VAR_4 ^ (VAR_6 + 1);
          }
          return VAR_5;
        }
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1 += FUNCTION_1(VAR_2);
        }
    }
};