const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push(VAR_2 + 2 * Math.random());
        }
        VAR_3 = 0;
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_2 < VAR_5; VAR_2++) {
          VAR_6 += ~~VAR_1[VAR_2];
        }
    }
};