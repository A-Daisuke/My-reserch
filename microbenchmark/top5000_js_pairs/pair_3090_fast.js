const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 1000000;
        function FUNCTION_1(VAR_3) {
          return VAR_1 + 1;
        }
        while (VAR_2--) {
          VAR_1 = FUNCTION_1(VAR_1);
        }
    }
};