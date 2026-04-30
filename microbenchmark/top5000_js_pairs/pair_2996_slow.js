const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          if (!VAR_1 || VAR_1 < 0) return "";
          return new Array(++VAR_1).join(0).replace(/./g, function () {
            return (0 | (Math.random() * 32)).toString(32);
          });
        };
        FUNCTION_1(1000);
    }
};