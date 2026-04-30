const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        mLABEL: while (1) {
          if (VAR_1 < 1000000) {
            VAR_1 += 1;
            continue mLABEL;
          }
          break;
        }
    }
};