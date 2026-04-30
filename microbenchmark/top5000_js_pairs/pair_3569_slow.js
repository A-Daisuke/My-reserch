const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: "a",
          KEY_2: "b",
        };
        function FUNCTION_1() {
          return VAR_1;
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          FUNCTION_1();
        }
    }
};