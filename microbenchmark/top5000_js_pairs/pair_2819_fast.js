const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push(1000 * Math.random());
        }
        var VAR_3 = VAR_1.reduce(function (VAR_4, VAR_5) {
          return VAR_4 > VAR_5 ? VAR_4 : VAR_5;
        }, VAR_1[0]);
    }
};