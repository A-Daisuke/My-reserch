const Benchmark = {
    run: function() {
        var VAR_1 = {};
        VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_1["key" + VAR_3] = VAR_3;
        }
        Object.keys(VAR_1);
    }
};