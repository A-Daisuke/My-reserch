const Benchmark = {
    run: function() {
        var VAR_1 = "-",
          VAR_2 = ".",
          VAR_3 = 8,
          VAR_4 = 16,
          VAR_5 = 36,
          VAR_6 = 35,
          VAR_7 = 37,
          VAR_8 = 38,
          VAR_9 = 39,
          VAR_10 = 40,
          VAR_11 = 9;
        var FUNCTION_1 = function (VAR_12) {
          return (
            VAR_12 === VAR_4 ||
            VAR_12 === VAR_5 ||
            VAR_12 === VAR_6 ||
            VAR_12 === VAR_8 ||
            VAR_12 === VAR_9 ||
            VAR_12 === VAR_10 ||
            VAR_12 === VAR_7 ||
            VAR_12 === VAR_11
          );
        };
        for (var VAR_13 = 0; VAR_13 < 1000; VAR_13++) FUNCTION_1(VAR_13);
    }
};