const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_7) {
          for (var VAR_2 = 0, VAR_3 = 1, VAR_4 = 0, VAR_6 = 1; VAR_6 < VAR_7; VAR_6++) {
            VAR_2 = VAR_4 + VAR_3;
            VAR_4 = VAR_3;
            VAR_3 = VAR_2;
          }
          return VAR_2;
        }
        FUNCTION_2(1000);
    }
};