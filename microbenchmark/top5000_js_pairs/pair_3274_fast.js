const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random());
        }
        var VAR_3 = VAR_1.reduce(function (VAR_5, VAR_6) {
          return VAR_5 + VAR_6;
        }, 0);
    }
};