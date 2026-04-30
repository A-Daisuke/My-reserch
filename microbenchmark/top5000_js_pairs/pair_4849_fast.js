const Benchmark = {
    run: function() {
        function FUNCTION_2(VAR_7, VAR_8) {
          for (var VAR_5 = 0; VAR_5 < VAR_7; VAR_5++) {
            for (var VAR_9 = 0; VAR_9 < VAR_8; VAR_9++) {
              var VAR_10 = VAR_7 + VAR_8;
            }
          }
        }
        FUNCTION_2(10, 10);
    }
};