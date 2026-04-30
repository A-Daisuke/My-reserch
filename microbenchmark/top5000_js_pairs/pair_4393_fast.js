const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        var VAR_1 = null;
        var FUNCTION_3 = function (VAR_3) {
          if (VAR_3 && typeof VAR_3 === "function") {
            return VAR_3;
          }
          return function () {};
        };
        var FUNCTION_2 = function (VAR_2) {
          return VAR_3 && typeof VAR_3 === "function" ? VAR_3 : function () {};
        };
        FUNCTION_3(FUNCTION_1);
        FUNCTION_3(VAR_1);
    }
};