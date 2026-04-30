const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4, 5];
        for (var VAR_2 = 0; VAR_2 < 999999; VAR_2++) {
          VAR_1[0] = 1;
          VAR_1[1] = 2;
          VAR_1[2] = 3;
          VAR_1[3] = 4;
          VAR_1[4] = 5;
        }
    }
};