const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_3,
            VAR_4 = "";
          for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_4 += VAR_3;
          }
        }
        FUNCTION_1();
    }
};