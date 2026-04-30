const Benchmark = {
    run: function() {
        var VAR_2 = (function () {
          function FUNCTION_2(VAR_3, VAR_4) {
            if (VAR_4 <= 1) return VAR_3;
            return FUNCTION_2(VAR_4 / 2 + VAR_3, VAR_4 - 1);
          }
          return function (VAR_5) {
            return FUNCTION_2(1, VAR_5);
          };
        })();
        VAR_2(1000);
    }
};