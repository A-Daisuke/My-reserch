const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() });
        }
        var VAR_3 = VAR_1.reduce(function (VAR_6, VAR_7) {
          if (VAR_6.KEY_1 > VAR_7.KEY_1) {
            return VAR_6;
          }
          return VAR_7;
        });
    }
};