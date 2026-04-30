const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < VAR_1; VAR_3++) {
          VAR_2.push("I" + VAR_3);
        }
        var VAR_4 = {};
        for (var VAR_5 = 0; VAR_3 < 10000; VAR_3++) {
          var VAR_6 = "I" + VAR_3;
          VAR_4[VAR_7] = true;
        }
        var FUNCTION_1 = function (VAR_8, VAR_9) {
          for (var VAR_10 = 0; VAR_3 < VAR_2.length; VAR_3++) {
            if (VAR_2[VAR_3] === VAR_9) {
              return true;
            }
          }
          return false;
        };
        FUNCTION_1(VAR_2, "F000");
    }
};