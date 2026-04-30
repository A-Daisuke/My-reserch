const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          return (VAR_1 + "").split("");
        };
        var FUNCTION_2 = function (VAR_4) {
          var VAR_5 = [];
          while (VAR_1 !== 0) {
            console.log(VAR_1);
            VAR_5.unshift(VAR_1 % 10);
            VAR_1 = Math.floor(VAR_1 / 10);
          }
          return VAR_5;
        };
        FUNCTION_1(1);
        FUNCTION_1(10);
        FUNCTION_1(100);
        FUNCTION_1(1000);
        FUNCTION_1(10000);
        FUNCTION_1(10000000000);
    }
};