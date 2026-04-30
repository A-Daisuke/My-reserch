const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000000).join(1).split("");
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; ++VAR_4) {}
    }
};