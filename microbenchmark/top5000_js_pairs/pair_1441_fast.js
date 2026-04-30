const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000010);
        var VAR_2 = new Uint8Array(10000010);
        VAR_1[10000] = 100;
        VAR_2[10000] = 100;
        VAR_1.set(new Uint8Array(VAR_1.buffer, 10, 10000000));
    }
};