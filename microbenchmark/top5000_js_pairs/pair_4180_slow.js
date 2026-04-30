const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          return (function () {
            return {
              KEY_1: VAR_1.KEY_1,
              KEY_2: VAR_1.KEY_2,
            };
          })();
        }
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2 += 1) {
          FUNCTION_1({
            KEY_3: VAR_2,
            KEY_4: VAR_2 * VAR_2,
          });
        }
    }
};