const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2 += 1) {
          VAR_1.push((Math.random() * 100) | 0);
        }
        var VAR_5 = [];
        for (var VAR_6 of VAR_1) {
          VAR_5.push(VAR_6);
        }
        var VAR_3 = 0;
        for (var VAR_4 of VAR_5) {
          VAR_3 += VAR_6;
        }
    }
};