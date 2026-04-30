const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000);
        var VAR_5 = new DataView(VAR_1.buffer);
        VAR_1.forEach(function (VAR_2, VAR_3, VAR_4) {
          VAR_5.setUint8(VAR_3, 128);
        });
    }
};