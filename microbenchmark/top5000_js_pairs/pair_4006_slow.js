const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          function FUNCTION_1(VAR_2) {
            return VAR_2 === 0 ? 1 : VAR_2 * FUNCTION_1(VAR_2 - 1);
          }
          return function (VAR_3) {
            return FUNCTION_1(VAR_3);
          };
        })();
        VAR_1(470);
    }
};