const Benchmark = {
    run: function() {
        var VAR_2 = 0;
        var VAR_3 = 999999 % 8;
        if (VAR_3 > 0) {
          do {
            VAR_2++;
          } while (--VAR_3);
        }
        VAR_3 = parseInt(999999 / 8);
        if (VAR_3 > 0) {
          do {} while (--VAR_3);
        }
    }
};