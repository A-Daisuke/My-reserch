const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          for (var VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
            Math.pow(5, 10);
          }
          return {
            KEY_1: function () {
              return null;
            },
          };
        }
        var VAR_2 = (function () {
          return {
            KEY_2: function () {
              var VAR_3 = FUNCTION_1();
              VAR_3.KEY_1();
            },
          };
        })();
        for (var VAR_4 = 0; VAR_4 < 100; VAR_4++) VAR_2.KEY_2();
    }
};