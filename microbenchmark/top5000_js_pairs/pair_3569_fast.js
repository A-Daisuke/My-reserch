const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return {
            KEY_1: "a",
            KEY_2: "b",
          };
        }
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          FUNCTION_1();
        }
    }
};