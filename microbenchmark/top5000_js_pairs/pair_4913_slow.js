const Benchmark = {
    run: function() {
        var VAR_1 = 100;
        var VAR_2 = 100;
        var VAR_3 = new Uint32Array(VAR_1 * VAR_2);
        var VAR_4 = 0;
        var VAR_5 = VAR_2 * 0.5;
        var VAR_6 = 0,
          VAR_7 = 0;
        for (VAR_7 = 0; VAR_7 < VAR_5; ++VAR_7) {
          for (VAR_6 = 0; VAR_6 < VAR_1; ++VAR_6) {
            VAR_4 = VAR_3[VAR_7 * VAR_1 + VAR_6];
            VAR_3[VAR_7 * VAR_1 + VAR_6] = VAR_3[(VAR_2 - VAR_7) * VAR_1 + VAR_6];
            VAR_3[(VAR_2 - VAR_7) * VAR_1 + VAR_6] = VAR_4;
          }
        }
    }
};