const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        VAR_1 = Math.random();
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = parseInt(VAR_1) + VAR_1;
        }
    }
};