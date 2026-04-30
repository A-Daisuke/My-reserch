const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_2) {
          var VAR_3 = "";
          while (VAR_2--) {
            VAR_3 += (0 | (Math.random() * 32)).toString(32);
          }
          return VAR_3;
        };
        FUNCTION_1(1000);
    }
};