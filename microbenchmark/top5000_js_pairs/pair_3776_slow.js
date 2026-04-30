const Benchmark = {
    run: function() {
        function* FUNCTION_1() {
          for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
            yield VAR_1;
          }
        }
        for (var VAR_2 of FUNCTION_1()) {
        }
    }
};