const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; ++VAR_2) {
          VAR_1.push(0);
        }
        const VAR_4 = [];
        for (let VAR_5 = 0; VAR_2 < VAR_1.length; ++VAR_2) {
          VAR_4.push(VAR_1[VAR_2] + 1);
        }
    }
};