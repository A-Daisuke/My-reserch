const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2,
          VAR_3;
        VAR_3 = 100000;
        for (VAR_2 = 0; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = 0;
        for (VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; ++VAR_2) {
          VAR_4 += VAR_1[VAR_2];
        }
    }
};