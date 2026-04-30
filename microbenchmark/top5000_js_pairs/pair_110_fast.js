const Benchmark = {
    run: function() {
        var VAR_1 = [505, 555, 44444032, 0];
        var VAR_2, VAR_3;
        function FUNCTION_1(VAR_4) {
          return ("" + VAR_4).indexOf("0");
        }
        for (VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          for (VAR_3 in VAR_1) {
            FUNCTION_1(VAR_3);
          }
        }
    }
};