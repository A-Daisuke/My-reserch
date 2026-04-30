const Benchmark = {
    run: function() {
        var VAR_1 = 0;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++)
          try {
            throw VAR_2;
          } catch (VAR_3) {
            VAR_1++;
          }
    }
};