const Benchmark = {
    run: function() {
        var VAR_1 = [];
        !(function () {
          for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1.push(Math.random());
          }
        })();
        !(function () {
          "use strict";
          var VAR_3 = 0;
          VAR_1.forEach(function (VAR_4) {
            VAR_3 += VAR_4;
          });
        })();
    }
};