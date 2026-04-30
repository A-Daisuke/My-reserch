const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push({ KEY_1: (Math.random() * 10000) | 0 });
        }
        var VAR_3 = VAR_1.reduce(function (VAR_4, VAR_5) {
          return VAR_4.KEY_1 > VAR_5.KEY_1 ? VAR_4 : VAR_5;
        });
    }
};