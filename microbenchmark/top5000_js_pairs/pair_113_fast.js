const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4 = 0;
          for (var VAR_6 = 1; VAR_6 < VAR_1; VAR_6++) {
            if (VAR_6 % 3 == 0 || VAR_6 % 5 == 0) {
              VAR_4 += VAR_6;
            }
          }
          return VAR_4;
        }
        FUNCTION_1(10000);
    }
};