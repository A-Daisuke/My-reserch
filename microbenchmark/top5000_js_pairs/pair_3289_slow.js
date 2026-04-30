const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1, VAR_2, VAR_3) {
          if (arguments.length <= 1) {
            VAR_2 = VAR_1 || 0;
            VAR_1 = 0;
          }
          VAR_3 = arguments[2] || 1;
          var VAR_4 = Math.max(Math.ceil((VAR_2 - VAR_1) / VAR_3), 0);
          var VAR_5 = 0;
          var VAR_6 = [];
          while (VAR_5 < VAR_4) {
            VAR_6[VAR_5++] = VAR_1;
            VAR_1 += VAR_3;
          }
          return VAR_6;
        };
        FUNCTION_1(10000);
    }
};