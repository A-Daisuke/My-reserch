const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8];
        var VAR_2 = new Uint32Array([1, 2, 3, 4, 5, 6, 7, 8]);
        var VAR_3 = 2;
        var VAR_4 = 3;
        var VAR_5 = 4;
        var VAR_6 = 5;
        var VAR_7 = 6;
        var VAR_8 = 7;
        for (var VAR_9 = 0; VAR_9 < 100000; VAR_9++) {
          VAR_2[0] = VAR_9;
          VAR_2[7] = VAR_9;
        }
    }
};