const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000);
        var VAR_2 = new DataView(VAR_1.buffer);
        for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
          VAR_2.setUint8(VAR_3, 128);
        }
    }
};