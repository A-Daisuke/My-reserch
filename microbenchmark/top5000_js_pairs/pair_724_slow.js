const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(Math.floor(Math.random() * 1024));
          VAR_2.push(Math.floor(Math.random() * 1024));
        }
        VAR_1.push.apply(VAR_1, VAR_2);
    }
};