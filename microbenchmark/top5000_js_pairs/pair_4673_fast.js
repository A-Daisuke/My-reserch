const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_4) {
          for (var VAR_5 = 0, VAR_6 = 1, VAR_7 = 0, VAR_8 = 1; VAR_8 < VAR_4; VAR_8++) {
            VAR_5 = VAR_7 + VAR_6;
            VAR_7 = VAR_6;
            VAR_6 = VAR_5;
          }
          return VAR_5;
        }
        FUNCTION_2(1000);
    }
};