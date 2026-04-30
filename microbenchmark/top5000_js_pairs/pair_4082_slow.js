const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          var VAR_1 = 0;
          VAR_1 = VAR_1 + 10;
        }
        function FUNCTION_2() {}
        function FUNCTION_3(VAR_2) {
          var VAR_3 = VAR_2 || FUNCTION_2;
          VAR_3();
        }
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          FUNCTION_3(FUNCTION_1);
          FUNCTION_3();
        }
    }
};