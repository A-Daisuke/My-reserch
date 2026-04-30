const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_3 = "";
          while (--VAR_1) {
            VAR_3 += "AAAAA";
          }
          return VAR_3;
        };
        FUNCTION_1(10);
    }
};