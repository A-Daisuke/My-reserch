const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = new Array(VAR_1);
          for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_2[VAR_4] = 0;
          }
          return VAR_2;
        }
        var VAR_5 = new Array(100 * 100);
        for (var VAR_6 = 0; VAR_6 < 100; VAR_6++) {
          for (var VAR_7 = 0; VAR_7 < 100; VAR_7++) {
            VAR_5[VAR_6 * 100 + VAR_7] = 0;
          }
        }
    }
};