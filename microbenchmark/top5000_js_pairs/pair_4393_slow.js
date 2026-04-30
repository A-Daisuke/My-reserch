const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        var VAR_1 = null;
        var FUNCTION_2 = function (VAR_2) {
          return VAR_2 && typeof VAR_2 === "function" ? VAR_2 : function () {};
        };
        var FUNCTION_3 = function (VAR_3) {
          try {
            VAR_2();
          } catch (VAR_4) {
            VAR_4 = VAR_4;
          }
        };
        FUNCTION_3(FUNCTION_1);
        FUNCTION_3(VAR_1);
    }
};