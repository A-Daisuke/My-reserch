const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          while (typeof VAR_1 == "function") {
            VAR_1 = VAR_1();
          }
          return VAR_1;
        }
        var VAR_2 = (function () {
          function FUNCTION_2(VAR_3, VAR_4) {
            if (VAR_4 <= 1) return VAR_3;
            return function partial() {
              return FUNCTION_2(VAR_4 / 2 + VAR_3, VAR_4 - 1);
            };
          }
          return function (VAR_5) {
            return FUNCTION_1(FUNCTION_2(1, VAR_5));
          };
        })();
        VAR_2(10000);
    }
};