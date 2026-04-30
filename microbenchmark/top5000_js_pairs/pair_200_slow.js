const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000;
        while (VAR_2--) VAR_1.push(VAR_2);
        var VAR_3 = [],
          FUNCTION_1 = function (VAR_4) {
            VAR_3.push(VAR_4 + VAR_4);
          };
        VAR_1.forEach(function (VAR_5, VAR_6, VAR_7) {
          VAR_1.forEach(FUNCTION_1);
        });
    }
};