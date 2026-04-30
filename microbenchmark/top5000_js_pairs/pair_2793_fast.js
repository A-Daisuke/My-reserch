const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(10000);
        var VAR_2 = new DataView(VAR_1.buffer);
        VAR_1.forEach(function (VAR_4, VAR_5, VAR_6) {
          VAR_2.setUint8(VAR_5, 128);
        });
    }
};