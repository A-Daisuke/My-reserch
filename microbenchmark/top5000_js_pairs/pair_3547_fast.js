const Benchmark = {
    run: function() {
        var VAR_1, VAR_2, VAR_3;
        for (VAR_2 = 0; VAR_2 < 5; VAR_2++) {
          for (VAR_1 = 0; VAR_1 < 10000; VAR_1++) {
            VAR_3 = "foo";
          }
        }
    }
};