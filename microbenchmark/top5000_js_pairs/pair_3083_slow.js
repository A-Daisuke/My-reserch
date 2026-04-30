const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3,
          FUNCTION_1 = function (VAR_4) {
            return VAR_4;
          },
          VAR_5 = [],
          VAR_6,
          FUNCTION_2 = function () {
            return arguments;
          },
          FUNCTION_3 = function () {
            return true;
          };
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.push(VAR_1);
        }
        VAR_3 = eval("[" + VAR_2 + "]");
    }
};