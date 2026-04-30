const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(1024 * 16);
        var VAR_2 = new DataView(VAR_1);
        for (var VAR_3 = 0; VAR_3 < 1024; ++VAR_3) {
          VAR_2.setFloat64(VAR_3 * 16, Math.random());
          VAR_2.setFloat64(VAR_3 * 16 + 1, Math.random());
        }
    }
};