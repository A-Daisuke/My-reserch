const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(100000);
        var VAR_2 = new Uint8Array(100000);
        VAR_2.subarray(0, VAR_2.length).set(VAR_1.subarray(0, VAR_1.length));
    }
};