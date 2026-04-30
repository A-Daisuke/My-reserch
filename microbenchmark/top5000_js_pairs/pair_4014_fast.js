const Benchmark = {
    run: function() {
        var VAR_2 = 1,
          FUNCTION_1 = function () {
            VAR_2 = VAR_2 + 1;
            return VAR_2;
          };
        for (var VAR_1 = 0; VAR_1 < 100; VAR_1++) {
          FUNCTION_1();
        }
    }
};