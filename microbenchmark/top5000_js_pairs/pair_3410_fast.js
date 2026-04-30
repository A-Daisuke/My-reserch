const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        var VAR_3 = !!VAR_1.filter(function (VAR_4) {
          return VAR_4 < 0.01;
        }).length;
    }
};