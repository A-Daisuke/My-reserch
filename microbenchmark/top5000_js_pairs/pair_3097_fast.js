const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 1;
          for (var VAR_3 = VAR_1; VAR_3 > 0; VAR_3--) {
            VAR_2 = VAR_3 * VAR_2;
          }
          return VAR_2;
        }
        FUNCTION_1(2000);
    }
};