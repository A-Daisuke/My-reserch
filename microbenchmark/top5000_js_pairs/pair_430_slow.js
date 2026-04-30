const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3;
        for (VAR_3 = 0; VAR_3 < 10000; VAR_3 += 1) {
          VAR_1.push(Math.random());
          VAR_2.push(VAR_1[VAR_3].toString());
        }
        VAR_1.sort();
    }
};