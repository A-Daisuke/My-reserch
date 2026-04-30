const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(Math.random());
          VAR_2.push(Math.random());
        }
        VAR_1.splice(VAR_1.length, 0, VAR_2);
    }
};