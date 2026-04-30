const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          FUNCTION_3 = function () {
            VAR_1++;
          };
        while (VAR_1 < 1000000) {
          FUNCTION_3();
        }
    }
};