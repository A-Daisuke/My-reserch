const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50000; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        VAR_1 = [];
    }
};