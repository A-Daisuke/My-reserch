const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = 0;
        while (VAR_1--) {
          VAR_2 += (VAR_1 + VAR_1) >>> 1;
        }
    }
};