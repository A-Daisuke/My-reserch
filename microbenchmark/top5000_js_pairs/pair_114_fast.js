const Benchmark = {
    run: function() {
        var FUNCTION_1 = function FUNCTION_1(VAR_1) {
          return function (VAR_2) {
            return VAR_2.map(VAR_1);
          };
        };
        var FUNCTION_2 = function FUNCTION_2(VAR_6) {
          return VAR_6 + 5;
        };
        var VAR_7 = new Array(100000).map(function () {
          return Math.floor(Math.random() * 100);
        });
        FUNCTION_1(FUNCTION_2)(VAR_7);
    }
};