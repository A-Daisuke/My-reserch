const Benchmark = {
    run: function() {
        (function () {
          var VAR_3 = Math.abs;
          return (function (VAR_8, VAR_9) {
            var VAR_4 = 0;
            for (var VAR_5 = 0; VAR_5 < 1000; ++VAR_5) {
              for (var VAR_6 = 0; VAR_6 < VAR_9; ++VAR_6) {
                VAR_4 += VAR_3(VAR_8 * VAR_6);
              }
            }
            return VAR_4;
          })(3, 1000);
        })();
    }
};