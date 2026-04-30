const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50000; VAR_2++) {
          VAR_1.push({
            KEY_1: VAR_2,
            KEY_2: VAR_2,
          });
        }
        VAR_1.reduce(function (VAR_3, VAR_4) {
          VAR_3[VAR_4.KEY_1] = VAR_4.KEY_2;
          return VAR_3;
        }, {});
    }
};