const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {}
        function FUNCTION_2() {
          FUNCTION_2 = FUNCTION_1;
          VAR_1 += 1;
        }
        var VAR_2 = 0;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2 += (FUNCTION_2(), VAR_3);
        }
    }
};