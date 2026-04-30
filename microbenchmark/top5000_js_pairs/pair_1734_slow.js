const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3, VAR_4;
        VAR_4 = 100;
        VAR_1 = VAR_4;
        while (--VAR_1 > -1) {
          VAR_2 = VAR_4;
          while (--VAR_2 > -1) {
            VAR_3 = VAR_4;
            while (--VAR_3 > -1) {
              VAR_3;
            }
          }
        }
    }
};