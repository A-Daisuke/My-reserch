const Benchmark = {
    run: function() {
        var VAR_1 = ".".repeat(10000).split("");
        VAR_1.pop();
        VAR_1.push(".");
    }
};