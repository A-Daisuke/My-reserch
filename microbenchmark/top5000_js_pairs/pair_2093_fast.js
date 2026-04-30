const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {
          var VAR_6 = 0;
          VAR_6++;
          return VAR_6;
        }
        for (var VAR_5 = 0; VAR_5 < 9999; VAR_5++) {
          VAR_1 += FUNCTION_1();
        }
    }
};