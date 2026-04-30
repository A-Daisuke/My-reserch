const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          var VAR_2 = 0;
          for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
            var VAR_4 = VAR_1();
            VAR_2 += VAR_4.KEY_1 * VAR_4.KEY_2;
          }
        }
        var VAR_9 = 0;
        FUNCTION_1(function () {
          VAR_9++;
          return {
            KEY_1: VAR_9,
            KEY_2: VAR_9,
          };
        });
    }
};