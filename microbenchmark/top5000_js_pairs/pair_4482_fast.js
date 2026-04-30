const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; ++VAR_2) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        var VAR_6;
        VAR_6 = VAR_1.map(function (VAR_7) {
          return VAR_7.KEY_1;
        });
    }
};