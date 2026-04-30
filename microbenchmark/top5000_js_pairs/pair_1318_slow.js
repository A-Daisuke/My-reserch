const Benchmark = {
    run: function() {
        var VAR_1 = (function () {
          var VAR_2;
          VAR_2 = [];
          for (var VAR_3 = 1; VAR_3 <= 10000; VAR_3++) {
            VAR_2.push({ KEY_1: VAR_3 });
          }
          return VAR_2;
        })();
        while (VAR_1.length > 0) {
          var VAR_4 = VAR_1.shift();
        }
    }
};