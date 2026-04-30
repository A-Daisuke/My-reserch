const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000);
        var VAR_5 = new DataView(VAR_1.buffer);
        for (var VAR_6 = 0; VAR_6 < VAR_1.length; VAR_6++) {
          VAR_5.setUint8(VAR_6, 128);
        }
    }
};