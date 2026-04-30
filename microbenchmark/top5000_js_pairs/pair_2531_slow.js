const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(1296000);
        var VAR_2 = new Uint32Array(VAR_1);
        var VAR_3 = new Uint32Array(VAR_2.length);
        VAR_2.set(VAR_3);
    }
};