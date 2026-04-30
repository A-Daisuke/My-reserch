const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 1000;
        while (VAR_2--) VAR_1.push(VAR_2);
        var VAR_3 = [];
        VAR_1.forEach(function (VAR_7, VAR_8, VAR_9) {
          VAR_1.forEach(function (VAR_10, VAR_11, VAR_12) {
            VAR_3.push(VAR_7 + VAR_10);
          });
        });
    }
};