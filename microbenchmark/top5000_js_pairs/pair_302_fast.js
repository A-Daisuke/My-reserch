const Benchmark = {
    run: function() {
        VAR_1 = 1000 * 1000;
        function FUNCTION_2() {
          var VAR_2 = 1;
          var VAR_3 = 2;
          return VAR_2 + VAR_3;
        }
        function FUNCTION_1() {
          FUNCTION_2();
        }
        for (var VAR_4 = 0; VAR_4 < VAR_1; VAR_4++) {
          FUNCTION_1();
        }
    }
};