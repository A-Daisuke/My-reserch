const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_7 = VAR_1;
          for (var VAR_8 = 1; VAR_8 < arguments.length; VAR_8++) {
            VAR_7 = arguments[VAR_8](VAR_7, arguments[VAR_8]);
          }
          return VAR_7;
        }
        function FUNCTION_2(VAR_4) {
          return VAR_4 * 2;
        }
        function FUNCTION_3(VAR_5) {
          return VAR_5 * VAR_5;
        }
        for (var VAR_6 = 0; VAR_6 < 10000; VAR_6++) {
          FUNCTION_1(5, FUNCTION_3, FUNCTION_2);
        }
    }
};