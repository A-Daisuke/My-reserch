const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        VAR_1 = [];
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_1.push(null);
          }
        }
    }
};