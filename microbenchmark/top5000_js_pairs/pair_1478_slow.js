const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(4 * 1024 * 1024);
        var VAR_2 = new Uint8Array(2 * 1024 * 1024);
        var VAR_3 = new Float32Array(1024 * 1024);
        VAR_3.fill(0);
    }
};