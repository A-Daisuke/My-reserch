const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          5 ^ 2;
        }
        var VAR_3 = 10000;
        for (var VAR_4 = 0; VAR_4 < VAR_3; VAR_4++) {
          FUNCTION_1();
        }
    }
};