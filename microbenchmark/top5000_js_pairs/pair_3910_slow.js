const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          function FUNCTION_1(VAR_2, VAR_3) {
            if (VAR_3 <= 1) return VAR_2;
            return FUNCTION_1(VAR_3 / 2 + VAR_2, VAR_3 - 1);
          }
          return function (VAR_4) {
            return FUNCTION_1(1, VAR_4);
          };
        })();
        VAR_1(1000);
    }
};