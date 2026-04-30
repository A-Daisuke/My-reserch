const Benchmark = {
    run: function() {
        var VAR_1 = 12345;
        var VAR_2 = VAR_1,
          VAR_3 = 0;
        while (VAR_2 > 15) {
          VAR_2 -= 16;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
        }
        while (VAR_2 > 7) {
          VAR_2 -= 8;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
          VAR_3++;
        }
        while (VAR_2 > 0) {
          VAR_2 -= 1;
          VAR_3++;
        }
    }
};