const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = VAR_1,
          VAR_3 = 0;
        for (VAR_2; VAR_2 > 7; VAR_2 -= 8) {
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
        }
        for (VAR_2; VAR_2 > 0; VAR_2 -= 1) {
          VAR_3++;
        }
    }
};