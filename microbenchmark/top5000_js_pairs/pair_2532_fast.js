const Benchmark = {
    run: function() {
        var VAR_2, VAR_3;
        VAR_2 = Math.random();
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3 = VAR_2 + VAR_2;
        }
    }
};