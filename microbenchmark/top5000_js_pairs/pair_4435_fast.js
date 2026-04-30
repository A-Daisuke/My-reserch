const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          for (var VAR_3 = ""; --VAR_1; ) {
            VAR_3 += "AAAAA";
          }
          return VAR_3;
        };
        FUNCTION_1(10);
    }
};