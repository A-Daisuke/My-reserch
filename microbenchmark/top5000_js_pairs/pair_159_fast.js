const Benchmark = {
    run: function() {
        var VAR_4;
        VAR_4 = (function () {
          var VAR_2, VAR_1;
          VAR_1 = [];
          for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
            VAR_1.push(
              (function () {
                var VAR_3, VAR_5;
                VAR_5 = [];
                for (VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
                  VAR_5.push(null);
                }
                return VAR_5;
              })(),
            );
          }
          return VAR_1;
        })();
    }
};