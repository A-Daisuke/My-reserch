const Benchmark = {
    run: function() {
        var VAR_2 = Math.floor(100000 / 8),
          VAR_3 = 999999 % 8,
          VAR_4 = 0;
        do {
          switch (VAR_3) {
            case 0:
            case 7:
            case 6:
            case 5:
            case 4:
            case 3:
            case 2:
            case 1:
          }
          VAR_3 = 0;
        } while (VAR_2--);
    }
};