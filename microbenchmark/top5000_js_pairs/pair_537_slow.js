const Benchmark = {
    run: function() {
        var VAR_1 = Array(101).join(Array(1001).join(" ") + "x");
        VAR_1.replace(/\s/g, "");
    }
};