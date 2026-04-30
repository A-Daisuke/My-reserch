const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_2 = Math.random();
        VAR_1 = VAR_2 + "";
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_3 = parseFloat(VAR_1) + VAR_2;
        }
    }
};