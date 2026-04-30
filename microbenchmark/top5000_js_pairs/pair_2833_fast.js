const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 100; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        (function () {
          "use strict";
          var VAR_3 = 0;
          while (VAR_1.length) {
            VAR_3 += VAR_1.pop();
          }
          console.log(VAR_3);
        })();
    }
};