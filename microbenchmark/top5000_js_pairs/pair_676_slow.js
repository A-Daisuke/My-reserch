const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = "error type";
        var VAR_3 = 0;
        var VAR_4 = 0;
        while (VAR_4 < VAR_1) {
          try {
            throw new Error(VAR_2);
          } catch (VAR_5) {
            if (VAR_5.message === VAR_2) {
              ++VAR_3;
            }
          }
          ++VAR_4;
        }
    }
};