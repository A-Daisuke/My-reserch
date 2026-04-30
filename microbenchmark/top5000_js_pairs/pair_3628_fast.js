const Benchmark = {
    run: function() {
        var VAR_4, VAR_1, VAR_2;
        VAR_1 = Math.random();
        VAR_4 = VAR_1 + "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_2 = parseInt(VAR_4) + VAR_1;
        }
    }
};