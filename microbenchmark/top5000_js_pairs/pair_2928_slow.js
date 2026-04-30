const Benchmark = {
    run: function() {
        var VAR_1,
          VAR_2 = 100000;
        VAR_1 = -1;
        while (++VAR_1 !== VAR_2) {}
    }
};