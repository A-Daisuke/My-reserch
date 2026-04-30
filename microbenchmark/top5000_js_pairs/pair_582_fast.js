const Benchmark = {
    run: function() {
        var VAR_1 = new Uint32Array(1920 * 1080);
        for (var VAR_3 = 0; VAR_3 < 1080; ++VAR_3) {
          for (var VAR_2 = 0; VAR_2 < 1920; ++VAR_2) {
            VAR_1[VAR_3 * 1920 + VAR_2] = VAR_3 * 1920 + VAR_2;
          }
        }
    }
};