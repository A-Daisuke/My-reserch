const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        FUNCTION_1.VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          FUNCTION_1.VAR_3 = FUNCTION_1.VAR_1 + VAR_2;
        }
    }
};