const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        while (VAR_1 < 3000000) {
          ++VAR_1;
        }
    }
};