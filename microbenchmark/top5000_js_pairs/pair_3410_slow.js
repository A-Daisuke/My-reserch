const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) {
          VAR_1.push(Math.random());
        }
        var VAR_3 = false;
        VAR_1.forEach(function (VAR_4) {
          VAR_3 = VAR_3 || VAR_4 < 0.01;
        });
    }
};