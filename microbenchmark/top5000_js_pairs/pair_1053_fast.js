const Benchmark = {
    run: function() {
        (function (VAR_1, VAR_2) {
          var VAR_3 = Math.abs;
          var VAR_4 = 0;
          for (var VAR_5 = 0; VAR_5 < 1000; ++VAR_5) {
            for (var VAR_6 = 0; VAR_6 < VAR_2; ++VAR_6) {
              VAR_4 += VAR_3(VAR_1 * VAR_6);
            }
          }
          return VAR_4;
        })(3, 1000);
    }
};