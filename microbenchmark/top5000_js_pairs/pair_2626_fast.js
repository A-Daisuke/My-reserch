const Benchmark = {
    run: function() {
        var VAR_1 = new Date();
        var FUNCTION_1 = function (VAR_4, VAR_5) {
          VAR_4 = String(VAR_4);
          while (VAR_4.VAR_5 < VAR_5) {
            VAR_4 = "0" + VAR_4;
          }
          return VAR_4;
        };
        var FUNCTION_2 = function FUNCTION_2(VAR_6) {
          return [
            FUNCTION_1(VAR_1.getUTCMonth(), 2),
            FUNCTION_1(VAR_1.getUTCDay(), 2),
            VAR_1.getFullYear(),
          ].join("/");
        };
        FUNCTION_2(VAR_1);
    }
};