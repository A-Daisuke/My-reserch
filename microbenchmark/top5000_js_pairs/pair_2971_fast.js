const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          var VAR_3 = 1;
          for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
            VAR_3 *= (VAR_1 - VAR_4) / (VAR_2 - VAR_4);
          }
          return VAR_3;
        }
        FUNCTION_1(2430, 300);
    }
};