const Benchmark = {
    run: function() {
        var VAR_1 = new Uint8Array(100000);
        var VAR_2 = new Uint8Array(100000);
        var VAR_3 = 0,
          VAR_4 = 0;
        for (var VAR_5 = 0; VAR_5 < VAR_1.length; VAR_5++) {
          VAR_2[VAR_5 + VAR_4] = VAR_1[VAR_5 + VAR_3];
        }
    }
};