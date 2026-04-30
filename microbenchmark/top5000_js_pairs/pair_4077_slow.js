const Benchmark = {
    run: function() {
        VAR_1 = 10;
        function FUNCTION_1(VAR_2) {
          if (VAR_2 <= 1) {
            return VAR_2;
          } else {
            return FUNCTION_1(VAR_2 - 1) + FUNCTION_1(VAR_2 - 2);
          }
        }
        for (var VAR_3 = 1; VAR_3 <= VAR_1; VAR_3++) FUNCTION_1(VAR_1);
    }
};