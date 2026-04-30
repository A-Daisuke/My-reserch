const Benchmark = {
    run: function() {
        var VAR_1 = new Uint32Array(10000);
        VAR_1.fill(2 ^ 30);
        VAR_1.slice(10);
    }
};