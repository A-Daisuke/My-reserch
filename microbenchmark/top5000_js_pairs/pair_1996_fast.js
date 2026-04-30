const Benchmark = {
    run: function() {
        var FUNCTION_1 = function (VAR_1) {
          var VAR_3 = [];
          for (var VAR_4 = 0; VAR_4 <= VAR_1; VAR_4++) {
            if (VAR_3.length > 1) {
              VAR_3.push(VAR_3[VAR_3.length - 1] + VAR_3[VAR_3.length - 2]);
            } else {
              VAR_3.push(VAR_4);
            }
          }
          return VAR_3[VAR_3.length - 1];
        };
        var FUNCTION_2 = function (VAR_2) {
          return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, VAR_1) / Math.sqrt(5));
        };
        FUNCTION_1(20);
    }
};