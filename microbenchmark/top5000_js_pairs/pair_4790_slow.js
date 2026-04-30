const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = null;
        for (VAR_2 = 0; VAR_2 < 100; VAR_2 += 1) {
          VAR_1.unshift(VAR_2);
        }
        VAR_1.reverse();
    }
};