const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 1000000;
        function FUNCTION_1() {
          VAR_1++;
        }
        while (VAR_2--) {
          FUNCTION_1();
        }
    }
};