const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(4);
        var VAR_2 = new Int32Array(VAR_1);
        for (VAR_2[0] = 0; VAR_2[0] < 1000000; ++VAR_2[0]) {}
    }
};