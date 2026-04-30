const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(1);
        var VAR_2 = new Uint8Array(VAR_1);
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2++;
        }
    }
};