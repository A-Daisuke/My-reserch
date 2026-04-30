const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = [],
          VAR_3 = [];
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2.push(Math.random());
          VAR_3.push(Math.random());
        }
        [].push.apply(VAR_2, VAR_3);
    }
};