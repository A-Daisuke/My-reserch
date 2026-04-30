const Benchmark = {
    run: function() {
        var VAR_1 = 8;
        var VAR_2 = 2000;
        for (var VAR_3 = 0; VAR_3 < VAR_2; ++VAR_3) {
          var VAR_4 = 0;
          switch (VAR_1 - 1) {
            case 7:
              VAR_4 |= 1 << 7;
            case 6:
              VAR_4 |= 1 << 6;
            case 5:
              VAR_4 |= 1 << 5;
            case 4:
              VAR_4 |= 1 << 4;
            case 3:
              VAR_4 |= 1 << 3;
            case 2:
              VAR_4 |= 1 << 2;
            case 1:
              VAR_4 |= 1 << 1;
            case 0:
              VAR_4 |= 1;
          }
        }
    }
};