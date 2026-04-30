const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3 = 0,
          VAR_4 = 100000;
        for (VAR_3; VAR_3 < VAR_4; VAR_3 += 1) {
          VAR_1.push(VAR_3);
        }
        VAR_2 = VAR_1.map(function (VAR_5) {
          return VAR_5;
        });
    }
};