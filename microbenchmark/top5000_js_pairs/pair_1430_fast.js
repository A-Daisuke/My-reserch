const Benchmark = {
    run: function() {
        for (var VAR_5 = 0; VAR_5 < 100; ++VAR_5) {
          (function (VAR_6, VAR_7) {
            for (var VAR_8 = 0; VAR_8 < VAR_6; ++VAR_8) {
              VAR_7.push({
                KEY_1: VAR_5,
                KEY_2: VAR_8,
              });
            }
          })(100, []);
        }
    }
};