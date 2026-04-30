const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 <= 100; VAR_2++) {
          if (VAR_2 == 100 && VAR_1 <= 100) {
            VAR_1++;
            VAR_2 = 0;
          }
        }
    }
};