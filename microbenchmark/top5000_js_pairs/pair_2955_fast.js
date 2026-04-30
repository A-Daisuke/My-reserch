const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = [1, 2, 3, 4, 5];
        for (var VAR_3 = 0; VAR_3 < 100; VAR_3++) {
          VAR_1.push.apply(VAR_1, VAR_2);
        }
    }
};