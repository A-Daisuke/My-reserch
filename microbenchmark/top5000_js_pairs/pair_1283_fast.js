const Benchmark = {
    run: function() {
        "use strict";
        var VAR_9 = (function () {
          var VAR_10;
          function FUNCTION_1() {
            return {
              KEY_1: function (VAR_2, VAR_3) {
                return VAR_2 + VAR_3;
              },
              KEY_2: function (VAR_4) {
                return VAR_4++;
              },
            };
          }
          return {
            KEY_3: function () {
              if (!VAR_10) {
                VAR_10 = FUNCTION_1();
              }
              return VAR_10;
            },
          };
        })();
        for (var VAR_5 = 0; VAR_5 < 9999; VAR_5++) {
          var VAR_11 = VAR_9.KEY_3(),
            VAR_12 = VAR_9.KEY_3(),
            VAR_8 = VAR_11.KEY_1(123, 456) * VAR_12.KEY_2(789);
        }
    }
};