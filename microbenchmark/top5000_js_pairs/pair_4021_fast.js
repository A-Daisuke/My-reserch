const Benchmark = {
    run: function() {
        var VAR_1;
        for (VAR_1 = []; VAR_1.length < 1000; ) VAR_1.push(VAR_1.length);
    }
};