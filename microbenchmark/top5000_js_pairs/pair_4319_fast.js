const Benchmark = {
    run: function() {
        var VAR_3 = (function () {
          var VAR_4;
          return function () {
            if (VAR_4) {
              return VAR_4;
            }
            VAR_4 = new Date();
            return VAR_4;
          };
        })();
        for (var VAR_2 = 0; VAR_2 <= 10000; VAR_2++) {
          VAR_3();
        }
    }
};