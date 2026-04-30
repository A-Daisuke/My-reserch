const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        for (; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        VAR_1.forEach(function (VAR_8, VAR_9) {
          VAR_9 + VAR_9 * VAR_9;
          VAR_8 + VAR_8 * VAR_8;
        });
    }
};