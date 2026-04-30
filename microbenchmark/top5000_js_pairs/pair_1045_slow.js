const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push(Math.random());
        }
        VAR_1.filter(function (VAR_3) {
          return VAR_3 > 0.5;
        });
    }
};