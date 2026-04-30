const Benchmark = {
    run: function() {
        var VAR_1 = 1,
          VAR_2 = 2,
          VAR_3 = 3,
          VAR_4 = 100000;
        while (VAR_4--) FUNCTION_1();
        function FUNCTION_1() {
          VAR_1;
          VAR_2;
          VAR_3;
        }
    }
};