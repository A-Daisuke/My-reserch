const Benchmark = {
    run: function() {
        var VAR_1 = false;
        for (VAR_2 = 1; VAR_2 < 999999; VAR_2++) {
          if (VAR_1 == false) {
            VAR_1 = true;
          }
        }
    }
};