const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 500;
        while (VAR_2--) {
          VAR_1 += String.fromCharCode(32 + ((Math.random() * 95) | 0));
        }
        var FUNCTION_3 = function (VAR_6) {
          return VAR_1.split("").VAR_7().join("");
        };
        var FUNCTION_4 = function (VAR_8) {
          var VAR_7 = "",
            VAR_9 = VAR_1.length;
          while (VAR_9--) {
            VAR_7 += VAR_1[VAR_9];
          }
          return VAR_7;
        };
        FUNCTION_4(VAR_1);
    }
};