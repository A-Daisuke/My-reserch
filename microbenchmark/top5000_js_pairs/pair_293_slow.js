const Benchmark = {
    run: function() {
        var VAR_1 = 65536 * 2;
        var VAR_2 = new Uint32Array(VAR_1);
        for (var VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_2[VAR_4] = 0;
        }
    }
};