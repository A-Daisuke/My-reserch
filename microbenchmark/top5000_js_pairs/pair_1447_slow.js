const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [1, 2, 3, 4];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(Math.random());
        }
        VAR_1.concat(VAR_2);
    }
};