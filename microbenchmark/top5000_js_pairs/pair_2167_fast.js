const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {
          VAR_1++;
        }
        for (var VAR_5 = 0; VAR_5 < 9999; VAR_5++) {
          FUNCTION_1();
        }
    }
};