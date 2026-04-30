const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        do {
          VAR_1 += 1;
        } while (VAR_1 < 1000000);
    }
};