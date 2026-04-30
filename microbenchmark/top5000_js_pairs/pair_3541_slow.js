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
        try {
          console.log(VAR_1.noMethod());
        } catch (VAR_2) {
          console.log(VAR_1.FUNCTION_3());
        }
    }
};