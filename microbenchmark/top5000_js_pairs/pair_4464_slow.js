const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2) {
          return VAR_1 + VAR_2;
        }
        var VAR_3 = 1000;
        var VAR_4 = 0;
        for (var VAR_5 = 0; VAR_4 < VAR_3; VAR_4++) {
          function FUNCTION_2(VAR_6, VAR_7) {
            return VAR_6 + VAR_7;
          }
          FUNCTION_2(VAR_4, VAR_4);
        }
    }
};