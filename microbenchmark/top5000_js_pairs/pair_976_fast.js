const Benchmark = {
    run: function() {
        "use strict";
        var VAR_8 = (function () {
          return {
            KEY_1: function (VAR_1, VAR_2) {
              return VAR_1 + VAR_2;
            },
            KEY_2: function (VAR_3) {
              return VAR_3++;
            },
          };
        })();
        for (var VAR_4 = 0; VAR_4 < 9999; VAR_4++) {
          var VAR_9 = VAR_8,
            VAR_10 = VAR_8,
            VAR_7 = VAR_9.KEY_1(123, 456) * VAR_10.KEY_2(789);
        }
    }
};