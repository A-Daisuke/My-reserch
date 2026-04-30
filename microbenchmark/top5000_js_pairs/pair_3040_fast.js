const Benchmark = {
    run: function() {
        var VAR_1;
        function FUNCTION_1(VAR_2, VAR_3) {
          var VAR_4 = 1;
          while (VAR_3 > 0) {
            VAR_4 *= VAR_2;
            VAR_3--;
          }
          return VAR_4;
        }
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_1(5, 5);
        }
    }
};