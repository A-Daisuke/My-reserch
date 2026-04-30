const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1() {
          VAR_1++;
        }
        for (var VAR_2 = 0; VAR_2 < 9999; VAR_2++) {
          FUNCTION_1();
        }
    }
};