const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 500000;
        var VAR_4 = VAR_2 / 8;
        var VAR_5 = VAR_2 % 8;
        do {
          switch (VAR_5) {
            case 0:
              VAR_1++;
            case 7:
              VAR_1++;
            case 6:
              VAR_1++;
            case 5:
              VAR_1++;
            case 4:
              VAR_1++;
            case 3:
              VAR_1++;
            case 2:
              VAR_1++;
            case 1:
              VAR_1++;
          }
          VAR_5 = 0;
        } while (--VAR_4 > 0);
    }
};