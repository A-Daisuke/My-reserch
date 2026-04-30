const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3,
          FUNCTION_3 = function (VAR_7) {
            return VAR_7;
          },
          VAR_4 = [],
          VAR_5,
          FUNCTION_1 = function () {
            return arguments;
          },
          FUNCTION_2 = function () {
            return true;
          },
          VAR_6 = VAR_2.constructor;
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.push(VAR_1);
        }
        VAR_3 = VAR_2.map(FUNCTION_3);
    }
};