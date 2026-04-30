const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {
          var VAR_3 = 0;
          VAR_3++;
          return VAR_3;
        }
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          VAR_1 += FUNCTION_1();
        }
    }
};