const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(1296000);
        var VAR_2 = new Uint32Array(VAR_1);
        VAR_1 = new ArrayBuffer(VAR_1.byteLength);
        VAR_2 = new Uint32Array(VAR_1);
    }
};