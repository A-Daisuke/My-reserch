const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return VAR_1;
        };
        var FUNCTION_3 = function () {
          return { KEY_1: FUNCTION_1 };
        };
        var VAR_4 = FUNCTION_3();
        console.log(VAR_4.KEY_1("a"));
    }
};