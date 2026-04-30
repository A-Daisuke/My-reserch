const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(100000);
        var VAR_2 = new Uint8Array(100000);
        VAR_2.set(VAR_1);
    }
};