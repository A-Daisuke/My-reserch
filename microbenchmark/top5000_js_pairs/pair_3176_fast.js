const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = [];
        for (VAR_1 = 0; VAR_1 < 100000; ++VAR_1) {
          VAR_2.push(VAR_1);
        }
        var VAR_3 = VAR_2.reduce(function (VAR_4, VAR_5, VAR_6, VAR_7) {
          return VAR_4 + VAR_5;
        }, 0);
    }
};