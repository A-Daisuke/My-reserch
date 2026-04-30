const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return VAR_1 + 2;
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          (() => FUNCTION_1(VAR_2))();
        }
    }
};