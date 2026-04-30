const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          VAR_1.push(VAR_3);
        }
        VAR_1.forEach(function (VAR_5) {});
    }
};