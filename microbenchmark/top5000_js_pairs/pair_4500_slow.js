const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 0,
          VAR_3;
        function FUNCTION_1() {
          VAR_2 = VAR_2 ^ (2 + VAR_2 * VAR_3);
        }
        while (VAR_1--) {
          VAR_3 = Math.random();
          FUNCTION_1();
        }
    }
};