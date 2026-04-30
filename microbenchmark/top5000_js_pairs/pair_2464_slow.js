const Benchmark = {
    run: function() {
        var VAR_1 = new Float32Array(9000);
        Math.max.apply(Math, VAR_1);
    }
};