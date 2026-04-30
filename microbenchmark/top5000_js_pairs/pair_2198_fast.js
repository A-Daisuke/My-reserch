const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() });
        }
        var VAR_8 = VAR_1.reduce(function (VAR_9, VAR_10) {
          if (VAR_9.KEY_1 > VAR_10.KEY_1) {
            return VAR_9;
          }
          return VAR_10;
        });
    }
};