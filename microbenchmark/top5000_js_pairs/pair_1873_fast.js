const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return 10 + Math.random() * 2;
        }
        function FUNCTION_3(VAR_2) {
          for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
            FUNCTION_1();
          }
        }
        FUNCTION_3(10000);
    }
};