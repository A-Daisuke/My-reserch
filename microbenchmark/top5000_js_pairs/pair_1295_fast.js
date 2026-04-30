const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push({ KEY_1: VAR_3 });
        }
        (function () {
          var VAR_4 = 0;
          VAR_7 = VAR_1.map(function (VAR_8) {
            VAR_4 = VAR_8.KEY_1;
            if (VAR_4 % 2 === 0) {
              return VAR_4;
            } else {
              return 0;
            }
          });
        })();
    }
};