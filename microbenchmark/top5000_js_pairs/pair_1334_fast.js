const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_2;
          for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
            VAR_2 += VAR_3;
          }
        }
        FUNCTION_1();
    }
};