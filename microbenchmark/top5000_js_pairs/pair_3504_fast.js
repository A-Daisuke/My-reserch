const Benchmark = {
    run: function() {
        var VAR_4 = new Array(1000).join("test \\n");
        VAR_4.replace(/\\n/g, "\n");
    }
};