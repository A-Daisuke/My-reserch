const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        do {
          ++VAR_1;
        } while (VAR_1 < 3000000);
    }
};