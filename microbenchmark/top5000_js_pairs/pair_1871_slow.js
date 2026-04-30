const Benchmark = {
    run: function() {
        var VAR_1 = 1000000,
          VAR_2 = 0;
        var VAR_3 = VAR_1;
        while (VAR_3--) {}
    }
};