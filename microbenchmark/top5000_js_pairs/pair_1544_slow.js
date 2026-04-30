const Benchmark = {
    run: function() {
        var VAR_1 = new ArrayBuffer(16 * 1000);
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          var VAR_3 = VAR_2 * 16;
          for (var VAR_4 = 0; VAR_4 < 16; VAR_4++) {
            VAR_1[VAR_3 + VAR_4] = VAR_4;
          }
        }
    }
};