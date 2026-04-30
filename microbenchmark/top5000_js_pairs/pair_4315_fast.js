const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_2() {
          VAR_1++;
        }
        function FUNCTION_1() {
          FUNCTION_2();
        }
        for (var VAR_2 = 0; VAR_2 < 1500; VAR_2++) {
          FUNCTION_1();
        }
    }
};