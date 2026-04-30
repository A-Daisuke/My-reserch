const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 10000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        VAR_1.indexOf(VAR_2) >= 0;
    }
};