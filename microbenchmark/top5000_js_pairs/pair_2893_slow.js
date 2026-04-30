const Benchmark = {
    run: function() {
        var VAR_1 = 255;
        var VAR_2 = 255;
        for (var VAR_3 = 0; VAR_3 < 255; VAR_3++) {
          for (var VAR_4 = 0; VAR_4 < 255; VAR_4++) {
            VAR_2--;
            if (VAR_2 < 0) {
              VAR_2 = 255;
              VAR_1--;
              if (VAR_1 < 0) {
                VAR_1 = 255;
              }
            }
          }
        }
    }
};