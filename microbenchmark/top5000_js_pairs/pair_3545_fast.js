const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_6 = 1;
          var VAR_7 = 0;
          var VAR_8;
          for (var VAR_9 = 0; VAR_9 < VAR_1; VAR_9++) {
            VAR_8 = VAR_6;
            VAR_6 += VAR_7;
            VAR_7 = VAR_8;
          }
        }
        function FUNCTION_2(VAR_2) {
          VAR_3 = [0, 1];
          for (var VAR_4 = 2; VAR_4 <= VAR_2; VAR_4++) {
            VAR_3[VAR_5] = VAR_3[VAR_4 - 1] + VAR_3[VAR_4 - 2];
          }
        }
        FUNCTION_1(16);
    }
};