const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(Math.random() * 10000);
        }
        var VAR_3 = Math.max.apply(null, VAR_1);
    }
};