const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).join(",");
        var VAR_2 = VAR_1.split(",", 2)[0];
    }
};