const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        var VAR_2 = 65536;
        VAR_1 = 0;
        while (true) {
          VAR_1 = (VAR_1 + 1) % VAR_2;
          if (VAR_1 == 0) {
            break;
          }
        }
    }
};