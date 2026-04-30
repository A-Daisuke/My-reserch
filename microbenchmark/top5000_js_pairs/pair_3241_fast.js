const Benchmark = {
    run: function() {
        var VAR_4 = new DataView(new ArrayBuffer(16));
        VAR_4.setFloat64(0, Math.random());
        VAR_4.setFloat64(8, Math.random());
    }
};