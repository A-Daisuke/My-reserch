const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          5 ^ 2;
        }
        function FUNCTION_2(VAR_1, VAR_2) {
          VAR_1 && VAR_2() & FUNCTION_2(--VAR_1, VAR_2);
        }
        var VAR_3 = 10000;
        FUNCTION_2(VAR_3, FUNCTION_1);
    }
};