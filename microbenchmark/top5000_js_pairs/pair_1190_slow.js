const Benchmark = {
    run: function() {
        var VAR_1 = 100000;
        var VAR_2 = {};
        do {
          VAR_2[0] = 1;
        } while (VAR_1--);
    }
};