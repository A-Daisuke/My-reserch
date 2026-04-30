const Benchmark = {
    run: function() {
        var VAR_2 = 0;
        function FUNCTION_1() {
          VAR_2++;
        }
        for (var VAR_1 = 0; VAR_1 < 9999; VAR_1++) {
          FUNCTION_1();
        }
    }
};