const Benchmark = {
    run: function() {
        var VAR_1 = 10000000;
        do {
          VAR_1 / 2;
        } while (VAR_1-- >= 0);
    }
};