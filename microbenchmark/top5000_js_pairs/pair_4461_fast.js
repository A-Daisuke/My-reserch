const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0, VAR_4; VAR_3 < 1000; VAR_3++) {
          VAR_4 = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
          VAR_1.push(VAR_4);
          VAR_2.push(VAR_4.toFixed());
        }
        for (var VAR_5 = 0, VAR_6 = VAR_1.length, VAR_8; VAR_3 < VAR_6; ++VAR_3) {
          VAR_8 = VAR_1[VAR_3] & (1 === 0);
        }
    }
};