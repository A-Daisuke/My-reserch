const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1 = VAR_1.concat(VAR_2);
        }
    }
};