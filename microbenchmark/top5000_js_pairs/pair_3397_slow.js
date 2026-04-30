const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return new Array(32);
        }
        function FUNCTION_2() {
          return [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ];
        }
        for (var VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          FUNCTION_1();
        }
    }
};