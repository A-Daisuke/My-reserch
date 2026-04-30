const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 0;
        while (VAR_1--) {
          VAR_2 = VAR_2 ^ (2 + VAR_2 * Math.random());
        }
    }
};