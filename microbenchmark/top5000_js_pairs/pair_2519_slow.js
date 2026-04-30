const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 1000;
        while (--VAR_2) VAR_1.unshift(VAR_2);
    }
};