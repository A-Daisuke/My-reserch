const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [],
          VAR_3;
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          VAR_1.push(VAR_4);
          VAR_2.push(VAR_4 + 1000);
        }
        VAR_1 = VAR_1.concat(VAR_2);
    }
};