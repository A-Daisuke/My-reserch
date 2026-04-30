const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = FUNCTION_1(1);
        var VAR_3 = FUNCTION_1(2);
        function FUNCTION_1(VAR_4) {
          return function (VAR_5) {
            return VAR_4 + VAR_5;
          };
        }
        (function () {
          var VAR_6 = 100000;
          var VAR_7;
          for (VAR_7 = 0; VAR_7 < VAR_6; VAR_7++) {
            VAR_1.push(1);
          }
        })();
        VAR_1.map(VAR_2).map(VAR_3);
    }
};