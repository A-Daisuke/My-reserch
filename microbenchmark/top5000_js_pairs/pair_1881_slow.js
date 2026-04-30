const Benchmark = {
    run: function() {
        var VAR_1 = 1000000;
        var VAR_2 = VAR_1;
        while (VAR_2--) {}
    }
};