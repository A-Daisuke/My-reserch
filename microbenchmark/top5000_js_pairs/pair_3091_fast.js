const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3, VAR_4;
        VAR_4 = 100;
        VAR_1 = VAR_4;
        while (-1 < --VAR_1) {
          VAR_2 = VAR_4;
          while (-1 < --VAR_2) {
            VAR_3 = VAR_4;
            while (-1 < --VAR_3) {
              VAR_3;
            }
          }
        }
    }
};