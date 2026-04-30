const Benchmark = {
    run: function() {
        var VAR_4, VAR_5, VAR_6;
        VAR_4 = (function () {
          var VAR_2, VAR_1;
          VAR_1 = [];
          for (VAR_6 = VAR_2 = 0; VAR_2 < 1000; VAR_6 = ++VAR_2) {
            VAR_1.push(
              (function () {
                var VAR_3, VAR_7;
                VAR_7 = [];
                for (VAR_5 = VAR_3 = 0; VAR_3 < 1000; VAR_5 = ++VAR_3) {
                  VAR_7.push(null);
                }
                return VAR_7;
              })(),
            );
          }
          return VAR_1;
        })();
    }
};