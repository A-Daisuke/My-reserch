const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push({ KEY_1: Math.random() >= 0.5 ? true : false });
        }
        var VAR_3 = VAR_1.filter(function (VAR_4) {
          return VAR_2.KEY_1;
        });
        var VAR_5 = VAR_1.filter(function (VAR_6) {
          return !VAR_2.KEY_1;
        });
    }
};