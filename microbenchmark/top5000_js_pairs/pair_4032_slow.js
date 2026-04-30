const Benchmark = {
    run: function() {
        var VAR_1 = ".".repeat(10000).split("");
        VAR_1.shift();
        VAR_1.push(".");
    }
};