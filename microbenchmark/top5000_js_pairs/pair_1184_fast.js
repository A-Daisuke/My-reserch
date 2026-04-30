const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (var VAR_2 = 0; VAR_2 < 16; VAR_2++) {
          for (var VAR_3 = 0; VAR_3 < 16; VAR_3++) {
            for (var VAR_4 = 0; VAR_4 < 16; VAR_4++) {
              VAR_1[VAR_2 + (VAR_3 * 16 + VAR_4) * 16] = Math.random();
            }
          }
        }
    }
};