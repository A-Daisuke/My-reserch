const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(1000 * Math.random());
        }
        var VAR_3 = Math.max.apply(Math, VAR_1);
    }
};