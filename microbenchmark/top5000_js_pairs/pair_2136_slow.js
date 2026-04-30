const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5, 6, 7, 8];
        var VAR_2 = 1;
        var VAR_3 = 2;
        var VAR_4 = 3;
        var VAR_5 = 4;
        var VAR_6 = 5;
        var VAR_7 = 6;
        var VAR_8 = 7;
        var VAR_9 = 8;
        for (var VAR_10 = 0; VAR_10 < 100000; VAR_10++) {
          VAR_1[0] = VAR_10;
          VAR_1[7] = VAR_10;
        }
    }
};