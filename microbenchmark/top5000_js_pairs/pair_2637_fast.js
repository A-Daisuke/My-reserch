const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).join(",ab,,cdeef gh,");
        var VAR_2 = 0;
        VAR_2 = VAR_1.split(",").length - 1;
    }
};