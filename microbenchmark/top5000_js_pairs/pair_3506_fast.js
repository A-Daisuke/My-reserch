const Benchmark = {
    run: function() {
        var VAR_3 = new Uint8Array([1, 2, 4, 8]);
        var VAR_1;
        var VAR_2 = 0;
        for (VAR_1 = 0; VAR_1 < 1000; VAR_1++) {
          VAR_2 += VAR_3[VAR_1 % 4];
        }
    }
};