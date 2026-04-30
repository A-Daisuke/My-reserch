const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (VAR_1 === 0) {
            return 1;
          } else {
            return VAR_1 * arguments.callee(VAR_1 - 1);
          }
        };
        FUNCTION_1(1000);
    }
};