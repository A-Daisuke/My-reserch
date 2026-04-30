const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (VAR_1 === 1) {
            return (function () {
              var VAR_3 = 1;
              var VAR_4 = 2;
              return VAR_3 + VAR_4;
            })();
          }
        };
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          FUNCTION_1(VAR_2);
        }
    }
};