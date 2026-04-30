const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return "x";
        }
        var VAR_4 = "";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_4 += FUNCTION_1();
        }
    }
};