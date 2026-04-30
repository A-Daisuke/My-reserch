const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(16 * 1000);
        var VAR_5 = new Uint8Array(VAR_1);
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_5.set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], VAR_2 * 16);
        }
    }
};