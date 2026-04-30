const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 1000; VAR_2--; ) {
          VAR_1.push({ KEY_1: VAR_2 });
        }
        VAR_1.map(function (VAR_3) {
          return VAR_3.KEY_1;
        });
    }
};