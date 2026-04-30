const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        function FUNCTION_1(VAR_2) {
          VAR_1 = VAR_2++;
          VAR_2 > 500 || FUNCTION_1(VAR_2);
        }
        FUNCTION_1(0);
    }
};