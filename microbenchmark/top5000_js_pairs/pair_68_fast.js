const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_4 = Array(VAR_1),
            VAR_3,
            VAR_5 = 0;
          for (VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
            VAR_4[VAR_5++] = VAR_3;
          }
        }
        FUNCTION_1(1000000);
    }
};