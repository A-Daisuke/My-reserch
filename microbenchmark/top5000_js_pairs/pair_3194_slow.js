const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(100000);
        var VAR_2 = new Uint8Array(100000);
        var VAR_3 = new Uint32Array(VAR_1.buffer);
        var VAR_4 = new Uint32Array(VAR_2.buffer);
        var VAR_5 = VAR_3.length;
        var VAR_6 = 0,
          VAR_7 = 0;
        for (var VAR_8 = 0; VAR_8 < VAR_5; VAR_8++) {
          VAR_4[VAR_8 + VAR_7] = VAR_3[VAR_8 + VAR_6];
        }
    }
};