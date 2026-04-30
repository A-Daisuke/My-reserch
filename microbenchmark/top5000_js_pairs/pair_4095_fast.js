const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        while (VAR_1 < 1000000) {
          ++VAR_1;
        }
    }
};