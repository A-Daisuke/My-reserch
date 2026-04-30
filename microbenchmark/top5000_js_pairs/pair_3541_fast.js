const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {};
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return "hello";
        };
        FUNCTION_1.prototype.FUNCTION_3 = function () {
          return "error";
        };
        var VAR_1 = new FUNCTION_1();
        if (typeof VAR_1.noMethod !== "undefined") {
          console.log(VAR_1.noMethod());
        } else {
          console.log(VAR_1.FUNCTION_3());
        }
    }
};