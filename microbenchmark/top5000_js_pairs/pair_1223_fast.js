const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push((Math.random() * 10000) | 0);
        }
        VAR_1 = Array.from(new Set(VAR_2));
    }
};