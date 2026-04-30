const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_2 = "";
          while (--VAR_1) {
            VAR_2 += "AAAAA";
          }
          return VAR_2;
        };
        FUNCTION_1(1000);
    }
};