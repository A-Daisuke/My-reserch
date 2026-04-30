const Benchmark = {
    run: function() {
        for (var VAR_1 = -16; VAR_1 < 16; VAR_1++) {
          for (var VAR_2 = -16; VAR_2 < 16; VAR_2++) {
            parseInt(VAR_1 / VAR_2);
          }
        }
    }
};